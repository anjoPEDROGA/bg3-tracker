// ==========================================
// CONFIGURAÇÕES, VERSIONAMENTO E ESTADO MULTI-PERFIL
// ==========================================
const APP_VERSION = 2; // Atualizado para a nova estrutura de perfis
const masterStorageKey = `bg3-tracker-master-v${APP_VERSION}`;

// Estrutura padrão de um novo jogo
const defaultGameData = {
    version: APP_VERSION,
    activeProfileId: "profile_1",
    profiles: {
        "profile_1": {
            id: "profile_1",
            name: "Campanha Principal",
            progress: {},
            openedSections: {}
        }
    }
};

let gameData = loadOrMigrateData();

// Variáveis de atalho para o perfil atualmente ativo
let savedProgress = gameData.profiles[gameData.activeProfileId].progress;
let openedSections = gameData.profiles[gameData.activeProfileId].openedSections;

// Mapeamento de Tags para exibição visual
const tagNames = {
    companion: "Companheiro",
    boss: "Boss",
    loot: "Loot",
    danger: "Aviso"
};

// ==========================================
// MIGRACÃO DE SAVES ANTIGOS E LOAD
// ==========================================
function loadOrMigrateData() {
    let data = JSON.parse(localStorage.getItem(masterStorageKey));
    
    if (!data) {
        // Verifica se há dados da Versão 1 (antes dos múltiplos perfis)
        const legacyDataV1 = JSON.parse(localStorage.getItem('bg3-walkthrough-save-v1'));
        const legacyOpenedV1 = JSON.parse(localStorage.getItem('bg3-open-sections'));
        
        if (legacyDataV1) {
            console.log("Migrando save da Versão 1 para a Versão 2...");
            let migratedData = JSON.parse(JSON.stringify(defaultGameData));
            migratedData.profiles["profile_1"].name = "Save Migrado (Antigo)";
            migratedData.profiles["profile_1"].progress = legacyDataV1;
            migratedData.profiles["profile_1"].openedSections = legacyOpenedV1 || {};
            
            localStorage.setItem(masterStorageKey, JSON.stringify(migratedData));
            return migratedData;
        } else {
            // Nenhum dado encontrado, cria um novo do zero
            localStorage.setItem(masterStorageKey, JSON.stringify(defaultGameData));
            return JSON.parse(JSON.stringify(defaultGameData));
        }
    }
    return data;
}

function saveDataToLocal() {
    // Atualiza o objeto master com os dados em memória do perfil ativo
    gameData.profiles[gameData.activeProfileId].progress = savedProgress;
    gameData.profiles[gameData.activeProfileId].openedSections = openedSections;
    localStorage.setItem(masterStorageKey, JSON.stringify(gameData));
}

// ==========================================
// GESTÃO DE PERFIS (UI)
// ==========================================
function initProfileManager() {
    const select = document.getElementById('profile-select');
    select.innerHTML = ''; // Limpa opções
    
    for (const [id, profile] of Object.entries(gameData.profiles)) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = profile.name;
        if (id === gameData.activeProfileId) {
            option.selected = true;
        }
        select.appendChild(option);
    }
}

function switchProfile(profileId) {
    if (!gameData.profiles[profileId]) return;
    
    // Salva o estado do perfil antigo antes de trocar
    saveDataToLocal();
    
    // Troca as referências em memória
    gameData.activeProfileId = profileId;
    savedProgress = gameData.profiles[profileId].progress;
    openedSections = gameData.profiles[profileId].openedSections;
    
    saveDataToLocal(); // Salva a mudança de activeProfileId
    
    // Re-renderiza toda a tela com os novos dados
    initApp();
}

function createNewProfile() {
    const name = prompt("Digite o nome da nova campanha (ex: Durge Bardo):");
    if (!name || name.trim() === "") return;
    
    const newId = 'profile_' + Date.now(); // Gera um ID único
    
    gameData.profiles[newId] = {
        id: newId,
        name: name.trim(),
        progress: {},
        openedSections: {}
    };
    
    saveDataToLocal();
    initProfileManager();
    switchProfile(newId);
}

function deleteCurrentProfile() {
    const profileKeys = Object.keys(gameData.profiles);
    
    if (profileKeys.length <= 1) {
        alert("Você precisa ter pelo menos uma campanha ativa!");
        return;
    }
    
    const currentName = gameData.profiles[gameData.activeProfileId].name;
    const confirmDelete = confirm(`Tem certeza que deseja apagar a campanha "${currentName}" permanentemente?`);
    
    if (confirmDelete) {
        delete gameData.profiles[gameData.activeProfileId];
        // Pega o primeiro ID disponível que sobrou para ser o novo ativo
        const nextId = Object.keys(gameData.profiles)[0];
        gameData.activeProfileId = nextId;
        
        savedProgress = gameData.profiles[nextId].progress;
        openedSections = gameData.profiles[nextId].openedSections;
        
        saveDataToLocal();
        initProfileManager();
        switchProfile(nextId);
    }
}

// ==========================================
// 1. INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================
function initApp() {
    initProfileManager();
    renderGuide();
    renderLoot();
    renderBuilds();
    updateGlobalProgress();
}

// ==========================================
// 2. RENDERIZAÇÃO DO DIÁRIO DE MISSÕES
// ==========================================
function renderGuide() {
    const container = document.getElementById('guide-container');
    container.innerHTML = '';
    
    const hasSavedState = Object.keys(openedSections).length > 0;
    let currentAct = 0;

    guideData.forEach((section, secIndex) => {
        const sectionAct = section.act || 1;
        if (sectionAct !== currentAct) {
            const separator = document.createElement('div');
            separator.className = 'act-separator';
            separator.textContent = `Ato ${sectionAct}`;
            container.appendChild(separator);
            currentAct = sectionAct;
        }

        const card = document.createElement('div');
        card.className = 'section-card guide-card';
        card.setAttribute('data-secindex', secIndex);

        const header = document.createElement('div');
        header.className = 'section-header';
        
        header.onclick = () => {
            const list = document.getElementById(`list-${secIndex}`);
            list.classList.toggle('active');
            openedSections[secIndex] = list.classList.contains('active');
            saveDataToLocal();
        };
        
        header.innerHTML = `<span>${section.sectionTitle}</span> <span id="prog-${secIndex}">0/${section.tasks.length}</span>`;
        
        const taskList = document.createElement('ul');
        taskList.className = 'task-list';
        taskList.id = `list-${secIndex}`;

        if (hasSavedState) {
            if (openedSections[secIndex]) taskList.classList.add('active');
        } else {
            if (!section.tasks.every(t => savedProgress[t.id]) && secIndex === getFirstIncompleteSectionIndex()) {
                taskList.classList.add('active');
                openedSections[secIndex] = true;
            }
        }

        section.tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'task-item';
            if (savedProgress[task.id]) li.classList.add('completed');

            let tagHtml = '';
            if (task.type && tagNames[task.type]) {
                tagHtml = `<span class="tag tag-${task.type}">${tagNames[task.type]}</span>`;
            }

            const isChecked = savedProgress[task.id] ? 'checked' : '';
            
            li.innerHTML = `
                <input type="checkbox" id="${task.id}" ${isChecked} onchange="toggleTask('${task.id}', ${secIndex})">
                <label class="task-content-wrapper" for="${task.id}">
                    ${tagHtml}
                    <span class="task-text">${task.text}</span>
                </label>
            `;
            taskList.appendChild(li);
        });

        card.appendChild(header);
        card.appendChild(taskList);
        container.appendChild(card);
        
        updateSectionProgress(secIndex);
    });

    if (!hasSavedState) {
        saveDataToLocal();
    }
}

// ==========================================
// 3. RENDERIZAÇÃO DO LOOT / ARTEFATOS
// ==========================================
function renderLoot() {
    const container = document.getElementById('loot-container');
    container.innerHTML = '';
    let currentAct = 0;

    lootData.forEach((section, secIndex) => {
        if (section.act !== currentAct) {
            const separator = document.createElement('div');
            separator.className = 'act-separator';
            separator.textContent = `Ato ${section.act}`;
            container.appendChild(separator);
            currentAct = section.act;
        }

        const card = document.createElement('div');
        card.className = 'section-card loot-card';

        const header = document.createElement('div');
        header.className = 'section-header';
        header.onclick = () => document.getElementById(`loot-list-${secIndex}`).classList.toggle('active');
        header.innerHTML = `<span>${section.sectionTitle}</span> <span>Loot</span>`;

        const taskList = document.createElement('ul');
        taskList.className = 'task-list active';
        taskList.id = `loot-list-${secIndex}`;

        section.items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'task-item';
            if (savedProgress[item.id]) li.classList.add('completed');

            let tagsHtml = '';
            if (item.recommendedFor && item.recommendedFor.length > 0) {
                tagsHtml = `<div class="recommended-tags">${item.recommendedFor.map(t => `<span class="tag-build">${t}</span>`).join('')}</div>`;
            }

            const isChecked = savedProgress[item.id] ? 'checked' : '';

            li.innerHTML = `
                <input type="checkbox" id="${item.id}" ${isChecked} onchange="toggleTask('${item.id}', null)">
                <label class="task-content-wrapper" for="${item.id}">
                    <span class="task-text rarity-${item.rarity}">${item.name}</span>
                    <div class="loot-details">
                        <span><strong>📍 Onde:</strong> ${item.location}</span>
                        <span>${item.description}</span>
                    </div>
                    ${tagsHtml}
                </label>
            `;
            taskList.appendChild(li);
        });

        card.appendChild(header);
        card.appendChild(taskList);
        container.appendChild(card);
    });
}

// ==========================================
// 4. RENDERIZAÇÃO DAS BUILDS
// ==========================================
function renderBuilds() {
    const container = document.getElementById('builds-container');
    container.innerHTML = '';

    buildsData.forEach((build, index) => {
        const card = document.createElement('div');
        card.className = 'build-card';

        const header = document.createElement('div');
        header.className = 'build-header';
        header.onclick = () => document.getElementById(`build-content-${index}`).classList.toggle('active');
        
        header.innerHTML = `
            <div>
                <div class="build-title">${build.charName}</div>
                <div class="build-subtitle">${build.subtitle}</div>
            </div>
            <div style="color: var(--gold-dim);">▼</div>
        `;

        const content = document.createElement('div');
        content.className = 'build-content';
        content.id = `build-content-${index}`;
        if (index === 0) content.classList.add('active');
        
        content.innerHTML = build.html;

        card.appendChild(header);
        card.appendChild(content);
        container.appendChild(card);
    });
}

// ==========================================
// 5. LÓGICA DE PROGRESSO E CHECKBOXES
// ==========================================
function toggleTask(taskId, secIndex) {
    const checkbox = document.getElementById(taskId);
    const li = checkbox.closest('.task-item');
    
    savedProgress[taskId] = checkbox.checked;
    saveDataToLocal();
    
    checkbox.checked ? li.classList.add('completed') : li.classList.remove('completed');

    if (secIndex !== null && document.getElementById(`prog-${secIndex}`)) {
        updateSectionProgress(secIndex);
        updateGlobalProgress();
    }
}

function updateSectionProgress(secIndex) {
    const section = guideData[secIndex];
    const count = section.tasks.filter(t => savedProgress[t.id]).length;
    document.getElementById(`prog-${secIndex}`).textContent = `${count}/${section.tasks.length}`;
}

function updateGlobalProgress() {
    let total = 0, completed = 0;
    let actStats = { 1: { total: 0, comp: 0 }, 2: { total: 0, comp: 0 }, 3: { total: 0, comp: 0 } };

    guideData.forEach(sec => {
        const act = sec.act || 1;
        const secTotal = sec.tasks.length;
        const secComp = sec.tasks.filter(t => savedProgress[t.id]).length;
        
        total += secTotal;
        completed += secComp;
        
        actStats[act].total += secTotal;
        actStats[act].comp += secComp;
    });

    const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
    document.getElementById('main-progress-bar').style.width = `${pct}%`;
    document.getElementById('main-progress-text').textContent = `${pct}% (${completed}/${total} tarefas)`;

    [1, 2, 3].forEach(act => {
        const aTotal = actStats[act].total;
        const aComp = actStats[act].comp;
        const aPct = aTotal === 0 ? 0 : Math.round((aComp / aTotal) * 100);
        
        document.getElementById(`act${act}-bar`).style.width = `${aPct}%`;
        document.getElementById(`act${act}-text`).textContent = `${aPct}%`;
    });
}

function getFirstIncompleteSectionIndex() {
    for (let i = 0; i < guideData.length; i++) {
        if (!guideData[i].tasks.every(t => savedProgress[t.id])) return i;
    }
    return -1;
}

// ==========================================
// 6. CONTROLOS GLOBAIS E PESQUISA
// ==========================================
function switchTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
    
    handleSearch(); 
}

function expandAll() {
    const activeTab = document.querySelector('.tab-content.active').id;
    if (activeTab === 'walkthrough') {
        document.querySelectorAll('.section-card').forEach(card => {
            if (card.style.display !== 'none') {
                card.querySelector('.task-list').classList.add('active');
                const secIndex = card.getAttribute('data-secindex');
                openedSections[secIndex] = true;
            }
        });
        saveDataToLocal();
    } else {
        document.querySelectorAll('.build-card, .loot-card').forEach(card => {
            if (card.style.display !== 'none') {
                const listOrContent = card.querySelector('.task-list, .build-content');
                if(listOrContent) listOrContent.classList.add('active');
            }
        });
    }
}

function collapseAll() {
    const activeTab = document.querySelector('.tab-content.active').id;
    if (activeTab === 'walkthrough') {
        document.querySelectorAll('.section-card').forEach(card => {
            if (card.style.display !== 'none') {
                card.querySelector('.task-list').classList.remove('active');
                const secIndex = card.getAttribute('data-secindex');
                openedSections[secIndex] = false;
            }
        });
        saveDataToLocal();
    } else {
        document.querySelectorAll('.build-card, .loot-card').forEach(card => {
            if (card.style.display !== 'none') {
                const listOrContent = card.querySelector('.task-list, .build-content');
                if(listOrContent) listOrContent.classList.remove('active');
            }
        });
    }
}

function jumpToNext() {
    if(document.querySelector('.tab-content.active').id !== 'walkthrough') {
        document.querySelector('.tab-btn').click();
    }
    
    collapseAll();
    const idx = getFirstIncompleteSectionIndex();
    
    if (idx === -1) {
        alert("Parabéns! A campanha está 100% concluída!");
        return;
    }
    
    document.getElementById(`list-${idx}`).classList.add('active');
    openedSections[idx] = true;
    saveDataToLocal();
    
    document.querySelector(`[data-secindex="${idx}"]`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let searchTimeout;
function handleSearchInput() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(handleSearch, 150);
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const activeTab = document.querySelector('.tab-content.active').id;

    if (activeTab === 'walkthrough' || activeTab === 'loot') {
        const cardClass = activeTab === 'walkthrough' ? '.guide-card' : '.loot-card';
        
        document.querySelectorAll(cardClass).forEach(card => {
            let hasMatch = false;
            card.querySelectorAll('.task-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.classList.remove('hidden');
                    hasMatch = true;
                } else {
                    item.classList.add('hidden');
                }
            });
            
            card.style.display = hasMatch ? 'block' : 'none';
            const taskList = card.querySelector('.task-list');
            
            if (query.length > 2 && hasMatch) {
                taskList.classList.add('active');
            } else if (query.length === 0) {
                card.style.display = 'block';
                card.querySelectorAll('.task-item').forEach(i => i.classList.remove('hidden'));
                
                if (activeTab === 'walkthrough') {
                    const secIndex = card.getAttribute('data-secindex');
                    if (!openedSections[secIndex]) taskList.classList.remove('active');
                }
            }
        });
    } else if (activeTab === 'builds') {
        document.querySelectorAll('.build-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(query)) {
                card.style.display = 'block';
                if (query.length > 2) card.querySelector('.build-content').classList.add('active');
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// ==========================================
// 7. BACKUP: EXPORTAR E IMPORTAR (MASTER JSON)
// ==========================================
function exportSave() {
    // Exportamos a estrutura completa do jogo (todos os perfis)
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gameData, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `bg3_tracker_master_backup.json`);
    dlAnchorElem.click();
}

function importSave(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsedData = JSON.parse(e.target.result);
            
            if (parsedData.version && parsedData.profiles && parsedData.activeProfileId) {
                // Sobrepõe o arquivo master completo
                gameData = parsedData;
                savedProgress = gameData.profiles[gameData.activeProfileId].progress;
                openedSections = gameData.profiles[gameData.activeProfileId].openedSections;
                
                saveDataToLocal();
                initApp(); 
                alert("Base de dados de perfis importada com sucesso!");
            } else {
                alert("Ficheiro JSON de backup inválido para a versão atual do gestor de perfis.");
            }
        } catch (error) {
            alert("Erro fatal ao tentar ler o ficheiro JSON.");
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}

// Arranca a aplicação
initApp();