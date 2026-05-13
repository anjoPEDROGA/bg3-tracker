// buildsData.js
const buildsData = [
    {
        charName: "O Monge da Mão Aberta (Durge / Tav)",
        subtitle: "8/9 Monge (Mão Aberta) / 3/4 Ladino (Ladrão)",
        html: `
            <div class="build-section-title">Visão Geral & Classes</div>
            <p>O epítome do dano corpo-a-corpo. Com alta velocidade de movimento, sobrevivência decente e muitos ataques por turno. A combinação de Monge com os ataques bônus extras da subclasse Ladrão cria uma máquina de dano massivo. A build atinge o tier S ao usar o talento <strong>Brigão de Taverna (Tavern Brawler)</strong> combinado com Elixires de Força.</p>
            <ul>
                <li><strong>9 Monge:</strong> Rajada de Golpes (Flurry of Blows), Movimento sem Armadura, Ki, Manifestações (dano elemental extra baseado em Sabedoria) e Ressonância de Ki.</li>
                <li><strong>3 Ladino:</strong> Subclasse Ladrão para Mãos Rápidas (Fast Hands), garantindo uma Ação Bônus extra por turno para mais Rajadas de Golpes.</li>
            </ul>

            <div class="build-section-title">Distribuição de Atributos</div>
            <p><em>Setup usando Elixir de Força do Gigante da Colina/Nuvem diariamente:</em></p>
            <ul>
                <li><strong>FOR:</strong> 8 <em>(Fica 21 a 27 com Elixir)</em> | <strong>DES:</strong> 16 | <strong>CON:</strong> 15 | <strong>INT:</strong> 8 | <strong>SAB:</strong> 17 | <strong>CAR:</strong> 8</li>
            </ul>

            <div class="build-section-title">Progressão de Níveis</div>
            <ul>
                <li><strong>Níveis 1 a 6 (Monge):</strong> No Nv 3 escolha Mão Aberta. No Nv 4 pegue o Talento <strong>Brigão de Taverna (+1 CON)</strong>. No Nv 5 ganha Ataque Extra e Ataque Atordoante. No Nv 6 ative as Manifestações de dano.</li>
                <li><strong>Níveis 7 a 9 (Ladino):</strong> No Nv 9 (Ladino 3) pegue a subclasse <strong>Ladrão</strong>.</li>
                <li><strong>Níveis 10 a 12 (Monge):</strong> Retorne ao Monge. No Nv 11 (Monge 8) pegue o Talento <strong>Melhoria de Habilidade (+2 SAB)</strong>.</li>
            </ul>

            <div class="build-section-title">Equipamentos Recomendados</div>
            <ul>
                <li><strong>Ato 1:</strong> Clava da Força do Gigante da Colina (se não usar elixires, equipe na off-hand). <em>Traje Gracioso (The Graceful Cloth)</em> para +2 DES. <em>Mãos Cintilantes (The Sparkle Hands)</em> para Cargas de Relâmpago. <em>Passos da Noite Desintegradores</em> (Botas).</li>
                <li><strong>Ato 2:</strong> <em>Luvas do Crepúsculo Infernal Falhas (Flawed Helldusk Gloves)</em> para dano necrótico extra. <em>Amuleto Sentiente</em> (para restaurar Ki).</li>
                <li><strong>Ato 3 (Endgame):</strong> <em>Luvas de Captura de Almas (Gloves of Soul Catching)</em> - BiS, dá +1d10 dano de força e cura. <em>Botas do Kushigo Desinibido</em> (BiS, soma Sabedoria ao dano). <em>Chifres do Berserker</em> (Elmo). <em>Presente de Khalid</em> (Amuleto para +1 SAB). <em>Anel com Capa de Sombra</em> (Shadow-Cloaked Ring).</li>
            </ul>

            <div class="build-section-title">Mecânicas de Combate & Poderes Ilítides</div>
            <ul>
                <li><strong>Combos:</strong> Use "Rajada de Golpes: Derrubar" para deixar o inimigo propenso, ganhando Vantagem nos próximos ataques. No endgame, empilhe inimigos com "Ressonância de Ki: Soco" e detone todos juntos para limpar o campo.</li>
                <li><strong>Consumíveis:</strong> Elixir de Força de Gigante da Colina (Ato 1 e 2) e Nuvem (Ato 3). Poção de Velocidade (para Surto de Ação substituto).</li>
                <li><strong>Ilítides Relevantes:</strong> Começos Favoráveis, Sorte dos Reinos Distantes (Crítico garantido), Abater o Fraco, e Freecast.</li>
            </ul>
        `
    },
    {
        charName: "Lae'zel - Campeã de Vlaakith",
        subtitle: "11 Guerreiro (Mestre de Batalha) / 1 Clérigo (Guerra)",
        html: `
            <div class="build-section-title">Visão Geral & Classes</div>
            <p>Lore-friendly e letal. A build foca em maximizar o dano de espadas de duas mãos Githyanki, focando em ataques de linha de frente. Com o kit do Mestre de Batalha e o Sacerdote da Guerra, Lae'zel pode golpear até 9 vezes no primeiro turno usando Surto de Ação e Poções.</p>
            
            <div class="build-section-title">Distribuição de Atributos</div>
            <ul>
                <li><strong>FOR:</strong> 17 | <strong>DES:</strong> 16 | <strong>CON:</strong> 14 | <strong>INT:</strong> 8 | <strong>SAB:</strong> 10 | <strong>CAR:</strong> 8</li>
            </ul>

            <div class="build-section-title">Progressão de Níveis</div>
            <ul>
                <li><strong>Níveis 1 a 6 (Guerreiro):</strong> Estilo de luta Defesa. No Nv 3: Mestre de Batalha (Ataque de Precisão, Desarmante, Derrubador). No Nv 4: Talento <strong>Mestre em Armas Grandes (GWM)</strong>. No Nv 5: Ataque Extra. No Nv 6: Talento <strong>+2 FOR</strong>.</li>
                <li><strong>Níveis 7 a 11 (Guerreiro):</strong> No Nv 8: Talento <strong>Atacante Selvagem (Savage Attacker)</strong>. No Nv 11: Ataque Extra Aprimorado (3 ataques por ação).</li>
                <li><strong>Nível 12 (Clérigo):</strong> Subclasse <strong>Domínio da Guerra</strong> (Vlaakith). Dá ataques extras com ação bônus e feitiços como Escudo da Fé e Santuário.</li>
            </ul>

            <div class="build-section-title">Equipamentos Recomendados</div>
            <ul>
                <li><strong>Ato 1:</strong> <em>Espada Larga Quebradora de Almas (Soulbreaker)</em>. <em>Elmo Caveira-Sombria (Grymskull Helm)</em>. <em>Armadura de Placas Adamantina</em>. <em>Luvas do Vira-lata Rosnador</em> (dá Vantagem).</li>
                <li><strong>Ato 2:</strong> <em>Alabarda da Vigilância</em> (se precisar de alcance). <em>Diadema da Sinergia Arcana</em> (se a INT for buffada). <em>Anel do Conduto Estranho</em> (bônus psíquico ao concentrar em Escudo da Fé). <em>Pedra da Ressonância</em> (Dobra o dano psíquico que as armas Gith causam).</li>
                <li><strong>Ato 3 (Endgame):</strong> <em>Espada de Prata do Plano Astral</em> (BiS absoluto para Githyankis). <em>Armadura do Crepúsculo Infernal (Helldusk)</em>. <em>Legado dos Mestres</em> (Luvas para dano puro). <em>Botas do Crepúsculo Infernal</em>.</li>
            </ul>

            <div class="build-section-title">Mecânicas de Combate & Poderes Ilítides</div>
            <ul>
                <li><strong>Gerenciando o GWM:</strong> O talento dá +10 de dano, mas -5 de acerto. Use o "Ataque de Precisão" do Mestre de Batalha, Óleos de Precisão ou feitiços de aliados (Bênção, Fogo Feérico) para anular a penalidade e garantir os acertos.</li>
                <li><strong>Combos Psíquicos:</strong> Como Gith, use equipamentos que adicionam Dano Psíquico e abuse da Pedra da Ressonância no Ato 2/3 para dobrar todo esse dano em área ao seu redor.</li>
            </ul>
        `
    },
    {
        charName: "Shadowheart - O Pilar Radiante",
        subtitle: "Clérigo (Luz / Tempestade) focado em Debuffs de Área",
        html: `
            <div class="build-section-title">Visão Geral & Classes</div>
            <p>O foco principal desta build não é apenas curar, mas dizimar o campo de batalha espalhando <strong>Orbe Radiante</strong> e <strong>Reverberação</strong>. Inimigos atingidos por seus feitiços de área perdem precisão (-1 por acúmulo de Orbe) e caem propensos. Pode ser executada puramente (12 Clérigo da Luz) ou 11 Clérigo / 1 Feiticeiro (para proficiência em CON e magia Escudo).</p>

            <div class="build-section-title">Distribuição de Atributos</div>
            <ul>
                <li><strong>FOR:</strong> 8 | <strong>DES:</strong> 16 | <strong>CON:</strong> 15 | <strong>INT:</strong> 8 | <strong>SAB:</strong> 17 | <strong>CAR:</strong> 8</li>
            </ul>

            <div class="build-section-title">Progressão de Níveis</div>
            <ul>
                <li><strong>Níveis 1 a 4 (Clérigo):</strong> Domínio da Luz (fogo/radiante). No Nv 4 pegue <strong>Melhoria: +1 SAB, +1 CON</strong>.</li>
                <li><strong>Nível 5 (Clérigo):</strong> Desbloqueia o motor da build: <strong>Guardiões Espirituais</strong> (use a versão Radiante na maioria das vezes).</li>
                <li><strong>Nível 6+ (Opcional - 1 Feiticeiro):</strong> Respec no Withers. Pegue Nvl 1 Feiticeiro (Tempestade) para proficiência em resistência de Constituição, feitiço Escudo, e o Voo gratuito como ação bônus, depois upe os 11 níveis de volta no Clérigo. No Nv 8 do Clérigo, pegue <strong>+2 SAB</strong>.</li>
            </ul>

            <div class="build-section-title">Equipamentos (O Combo do Orbe)</div>
            <ul>
                <li><strong>Ato 1:</strong> <em>Sangue de Lathander</em>. <strong>Armadura Luminosa (BiS absoluto, Underdark)</strong> - Ao causar dano radiante, explode luz, cegando todos em volta. <em>Luvas dos Céus Beligerantes</em> (Aplica Reverberação). <em>Botas do Clamor Tempestuoso</em> (Mais Reverberação). <em>A Promessa Sussurrante</em> (Anel que dá Bênção ao curar).</li>
                <li><strong>Ato 2:</strong> <em>Escudo Sentinela</em> (+3 Iniciativa). <em>Anel de Brilho Insensível</em> (+2 de dano radiante a inimigos iluminados).</li>
                <li><strong>Ato 3 (Endgame):</strong> <em>Amuleto do Devoto</em> (+2 Spell Save DC). <em>Manto da Pele de Trovão</em> (Daze em inimigos com Reverberação).</li>
            </ul>

            <div class="build-section-title">Mecânicas de Combate</div>
            <ul>
                <li><strong>O Liquidificador Radiante:</strong> Lance Guardiões Espirituais e ande no meio dos inimigos. Com a armadura e anéis, cada toque debuffa os oponentes a tal ponto que eles não conseguirão mais acertar nenhum ataque no seu grupo.</li>
            </ul>
        `
    },
    {
        charName: "Gale - O Mago de Waterdeep",
        subtitle: "10 Mago (Evocação) / 2 Clérigo (Domínio da Tempestade)",
        html: `
            <div class="build-section-title">Visão Geral & Classes</div>
            <p>O mestre do dano em área (AoE). O Mago da Evocação não dá dano aliado com suas próprias magias, e os 2 níveis de Clérigo da Tempestade permitem que ele inflija o <strong>dano máximo absoluto</strong> (sem rolar dados) de qualquer feitiço de raio/trovão via Canalizar Divindade.</p>

            <div class="build-section-title">Distribuição de Atributos</div>
            <ul>
                <li><strong>FOR:</strong> 8 | <strong>DES:</strong> 16 | <strong>CON:</strong> 14 | <strong>INT:</strong> 17 | <strong>SAB:</strong> 10 | <strong>CAR:</strong> 8</li>
            </ul>

            <div class="build-section-title">Progressão de Níveis</div>
            <ul>
                <li><strong>Níveis 1 a 4 (Mago):</strong> Evocação. Magias iniciais: <em>Míssil Mágico, Escudo, Orbe Cromática</em>. No Nv 4 pegue Talento: <strong>+2 INT</strong>.</li>
                <li><strong>Nível 5 e 6 (Respec - 1 Clérigo, resto Mago):</strong> Escolha Clérigo (Domínio da Tempestade). Você precisa da magia "Criar/Destruir Água". No nível 2 de clérigo ganha a <em>Ira Destrutiva</em> (Maximiza dado de dano).</li>
                <li><strong>Níveis 7 a 12 (Mago):</strong> Evolua como Mago até o nível 10 (ganha Evocação Fortalecida, somando INT ao dano das magias). No último talento, pegue <strong>Empunhadura Dupla</strong> ou Alerta.</li>
            </ul>

            <div class="build-section-title">Equipamentos Recomendados</div>
            <ul>
                <li><strong>Ato 1:</strong> <em>O Faísca (The Spellsparkler)</em>. <em>Amuleto da Faísca Psíquica</em> (+1 míssil mágico).</li>
                <li><strong>Ato 3 (Endgame):</strong> <em>Markoheshkir</em> (BiS Absoluto). <em>Cajado do Poder Mágico</em> (usando empunhadura dupla). <em>Armadura de Queda de Terra (Landfall)</em> ou Veste da Trama. <em>Amuleto do Devoto</em> (Carga extra para a Ira Destrutiva).</li>
            </ul>

            <div class="build-section-title">Mecânicas de Combate</div>
            <ul>
                <li><strong>O Combo Nuclear:</strong> Inimigos com status Molhado (Wet) recebem o DOBRO de dano elétrico. Conjure "Água". Em seguida lance <em>Relâmpago em Cadeia (Chain Lightning)</em> ativando a "Ira Destrutiva". O dano será maximizado E dobrado.</li>
            </ul>
        `
    },
    {
        charName: "Astarion - O Assassino Gloomstalker",
        subtitle: "5 Patrulheiro (Rastreador Sombrio) / 4 Ladino (Assassino) / 3 Guerreiro",
        html: `
            <div class="build-section-title">Visão Geral & Classes</div>
            <p>A build definitiva para obliterar inimigos no 1º turno com ataques furtivos. Iniciar o combate oculto aciona uma <strong>Rodada Surpresa</strong>. O Assassino converte ataques em críticos, o Rastreador Sombrio dá um ataque extra no 1º turno, e o Guerreiro dá Surto de Ação. Resultado: 6+ tiros críticos antes do inimigo agir.</p>

            <div class="build-section-title">Distribuição de Atributos</div>
            <ul>
                <li><strong>FOR:</strong> 8 <em>(Use Elixir ou Clava para 21 FOR com o Arco Titã)</em> | <strong>DES:</strong> 17 | <strong>CON:</strong> 14 | <strong>INT:</strong> 8 | <strong>SAB:</strong> 16 | <strong>CAR:</strong> 10</li>
            </ul>

            <div class="build-section-title">Progressão de Níveis</div>
            <ul>
                <li><strong>Níveis 1 a 5 (Patrulheiro):</strong> Subclasse <em>Rastreador Sombrio</em>. Estilo Arco. No Nv 4 pegue o Talento <strong>Atirador de Elite (Sharpshooter)</strong>.</li>
                <li><strong>Níveis 6 a 9 (Ladino):</strong> No Nv 3 pegue <strong>Assassino</strong>. No Nv 4, pegue Talento <strong>+2 DES</strong>.</li>
                <li><strong>Níveis 10 a 12 (Guerreiro):</strong> Nv 2 dá Surto de Ação. Nv 3 escolha <strong>Mestre de Batalha</strong> (ou Campeão).</li>
            </ul>

            <div class="build-section-title">Equipamentos Recomendados</div>
            <ul>
                <li><strong>Ato 1:</strong> <em>Arco Corda de Titã (Titanstring Bow)</em> - Escala com DES e FOR. <em>Faca do Rei da Montanha Inferior</em>. <em>Traje Gracioso</em> (+2 DES).</li>
                <li><strong>Ato 3 (Endgame):</strong> <strong>Armadura Bhaalista</strong> (Aura que dobra o dano perfurante). <em>Travessura Carmesim (Crimson Mischief)</em>.</li>
            </ul>

            <div class="build-section-title">Mecânicas de Combate</div>
            <ul>
                <li><strong>Combate:</strong> Entre invisível -> Dê o primeiro tiro -> Inicia a Rodada Surpresa. Atire com a vantagem do Assassino -> Gaste tudo -> Ative Surto de Ação -> Mais tiros. (Use Flechas de Muitos Alvos para limpar a tela).</li>
            </ul>
        `
    },
    {
        charName: "Karlach - O Throwzerker (Bárbaro Arremessador)",
        subtitle: "5 Bárbaro (Berserker) / 4 Ladino (Ladrão) / 3 Guerreiro (Campeão)",
        html: `
            <div class="build-section-title">Visão Geral & Classes</div>
            <p>O "Throwzerker" é uma das builds mais quebradas do jogo. Ela foca no talento <strong>Brigão de Taverna</strong> e em arremessar armas com a propriedade "Retornável" nos inimigos. O dano é absurdo, a precisão é de quase 100% no Ato 1 e o controle de campo é total (já que arremessos enfurecidos derrubam inimigos).</p>
            <ul>
                <li><strong>5 Bárbaro:</strong> Subclasse Berserker para "Frenesi", permitindo o Arremesso Enfurecido como Ação Bônus.</li>
                <li><strong>4 Ladino:</strong> Subclasse Ladrão para "Mãos Rápidas", dando uma segunda Ação Bônus (+1 arremesso por turno).</li>
                <li><strong>3 Guerreiro:</strong> Surto de Ação e a subclasse Campeão (para reduzir a margem de acerto crítico) ou Cavaleiro Místico (para ligar qualquer arma à sua mão).</li>
            </ul>

            <div class="build-section-title">Distribuição de Atributos</div>
            <ul>
                <li><strong>FOR:</strong> 17 | <strong>DES:</strong> 16 | <strong>CON:</strong> 15 | <strong>INT:</strong> 8 | <strong>SAB:</strong> 8 | <strong>CAR:</strong> 8</li>
            </ul>

            <div class="build-section-title">Progressão de Níveis</div>
            <ul>
                <li><strong>Níveis 1 a 5 (Bárbaro):</strong> Berserker. No Nível 4, o motor da build: Talento <strong>Brigão de Taverna (+1 FOR)</strong>. Nível 5 ganha Ataque Extra.</li>
                <li><strong>Níveis 6 a 9 (Ladino):</strong> Pegue a subclasse Ladrão no Nv 3. No Nv 4 pegue Talento <strong>+2 FOR</strong>.</li>
                <li><strong>Níveis 10 a 12 (Guerreiro):</strong> Pegue Surto de Ação e escolha a subclasse Campeão.</li>
            </ul>

            <div class="build-section-title">Equipamentos Recomendados</div>
            <ul>
                <li><strong>Ato 1:</strong> <em>Pique de Retorno (Returning Pike)</em> - Goblin Camp, essencial! <em>Anel do Arremesso (Ring of Flinging)</em> - Druid Grove. <em>Luvas do Kushigo Desinibido</em> - Recompensa por salvar Baelen no Underdark.</li>
                <li><strong>Ato 2:</strong> <em>Anel Cansado (Caustic Band)</em>. <em>Armadura de Placas Adamantina</em> ou <em>Traje Gracioso</em>.</li>
                <li><strong>Ato 3 (Endgame):</strong> <em>Nyrulna</em> (Tridente lendário no circo - cuidado com o dano em área nos aliados!). <em>Capacete de Grit</em> (Ação Bônus extra se <50% HP).</li>
            </ul>

            <div class="build-section-title">Mecânicas de Combate</div>
            <ul>
                <li><strong>O Loop:</strong> Ative Frenesi (Ação Bônus). Use Ação Principal para Arremessar o pique (x2 graças ao Ataque Extra). Use Ações Bônus restantes para o Arremesso Enfurecido (Enraged Throw), que deixará o inimigo propenso no chão. Simples e brutal.</li>
            </ul>
        `
    },
    {
        charName: "Minthara - O Lockadin (Paladino Bruxo)",
        subtitle: "7 Paladino (Quebrador de Juramento) / 5 Bruxo (Pacto da Lâmina)",
        html: `
            <div class="build-section-title">Visão Geral & Classes</div>
            <p>O <strong>Lockadin</strong> é uma das sinergias multiclasse mais fortes do jogo (Fora do Modo Honra). O Ataque Extra do Paladino de nível 5 se acumula com o Ataque Extra do Pacto da Lâmina do Bruxo, garantindo <strong>3 ataques por Ação Padrão</strong>. Além disso, o Pacto da Lâmina permite que você use o Carisma para atacar em vez de Força, e você recupera os espaços de magia de nível 3 do Bruxo a cada Descanso Curto para usar nas Destruições Divinas (Smites).</p>

            <div class="build-section-title">Distribuição de Atributos</div>
            <ul>
                <li><strong>FOR:</strong> 8 | <strong>DES:</strong> 14 | <strong>CON:</strong> 16 | <strong>INT:</strong> 8 | <strong>SAB:</strong> 10 | <strong>CAR:</strong> 17</li>
            </ul>

            <div class="build-section-title">Progressão de Níveis</div>
            <ul>
                <li><strong>Níveis 1 a 5 (Paladino):</strong> Subclasse Quebrador de Juramento (Oathbreaker) ou Vingança. Pegue estilo de luta Defesa ou Armas Grandes. No Nv 4 pegue <strong>Melhoria de Atributo (+2 CAR)</strong> ou Atacante Selvagem. Nv 5 ganha Ataque Extra.</li>
                <li><strong>Níveis 6 a 10 (Bruxo):</strong> Subclasse Corcel (The Fiend) ou Grande Antigo. No Nv 3 escolha <strong>Pacto da Lâmina</strong> (Isso é obrigatório!). No Nv 5 ganha o Ataque Extra Aprofundado (Terceiro ataque liberado).</li>
                <li><strong>Níveis 11 e 12 (Paladino):</strong> Continue no Paladino para ganhar a Aura de Proteção (Soma o CAR nos testes de resistência) e a Aura de Ódio (Soma o CAR no dano corpo a corpo).</li>
            </ul>

            <div class="build-section-title">Equipamentos Recomendados</div>
            <ul>
                <li><strong>Ato 1 e 2:</strong> <em>Diadema da Sinergia Arcana (Diadem of Arcane Synergy)</em> - Creche Y'llek (Soma o CAR no dano DUAS vezes). Espadas longas potentes ou Alabardas.</li>
                <li><strong>Ato 3 (Endgame):</strong> <em>Espada Matadora de Gigantes de Balduran</em> ou a <em>Espada de Prata do Plano Astral</em>. Armaduras Pesadas Lendárias.</li>
            </ul>

            <div class="build-section-title">Mecânicas de Combate</div>
            <ul>
                <li><strong>AVISO IMPORTANTE:</strong> Toda vez que você acordar de um Descanso Longo ou trocar de arma, você PRECISA usar a habilidade "Vincular Arma de Pacto" (Bind Pact Weapon) ou seus ataques serão muito fracos pois usarão sua Força 8.</li>
                <li>Use magias de Bruxo como "Fome de Hadar" para controle de área, e guarde seus Espaços de Magia (Spell Slots) primariamente para disparar Destruição Divina em acertos Críticos ou chefes.</li>
            </ul>
        `
    },
    {
        charName: "Halsin - Druida da Lua (Metamorfo)",
        subtitle: "10 Druida (Círculo da Lua) / 1 Clérigo de Guerra / 1 Feiticeiro (Opcional)",
        html: `
            <div class="build-section-title">Visão Geral & Classes</div>
            <p>A melhor build de Forma Selvagem (Wildshaper). A subclasse Círculo da Lua permite a transformação como Ação Bônus e concede acesso às formas de fera exclusivas (como o Urso-Coruja, o Tigre Dentes de Sabre e, mais tarde, os elementais Myrmidons). Graças ao talento <strong>Brigão de Taverna</strong>, os ataques das feras ficam ridiculamente precisos e fortes.</p>

            <div class="build-section-title">Distribuição de Atributos</div>
            <p><em>Nota: Quando você se transforma, seus atributos Físicos (FOR, DES, CON) são substituídos pelos do animal. A Sabedoria continuará comandando suas magias pré-transformação.</em></p>
            <ul>
                <li><strong>FOR:</strong> 10 | <strong>DES:</strong> 14 | <strong>CON:</strong> 16 | <strong>INT:</strong> 8 | <strong>SAB:</strong> 17 | <strong>CAR:</strong> 8</li>
            </ul>

            <div class="build-section-title">Progressão de Níveis</div>
            <ul>
                <li><strong>12 Círculo da Lua:</strong> A rota pura é fortíssima pois garante acesso ao terceiro talento (pegue Alerta) e maximiza os Pontos de Vida extras das suas formas.</li>
                <li><strong>Opção Multiclasse (10 Druida / 1 Clérigo / 1 Feiticeiro):</strong> O Nv 1 de Feiticeiro (Dracônico Branco) dá acesso a <em>Armadura de Agathys</em> e o feitiço <em>Escudo</em>. O Nv 1 de Clérigo de Guerra dá proficiência com armas marciais/pesadas para quando não estiver transformado e 3 ataques de ação bônus por dia.</li>
                <li><strong>Talentos (Qualquer Rota):</strong> No Nível 4 do Druida, pegue <strong>Brigão de Taverna (+1 CON)</strong>. No Nível 8, <strong>+2 SAB</strong> ou Atacante Selvagem.</li>
            </ul>

            <div class="build-section-title">Equipamentos Recomendados</div>
            <ul>
                <li><strong>Equipamento de Metamorfo:</strong> A maioria dos itens deixa de funcionar na forma selvagem, mas há exceções. Use o <em>Chapéu da Metamorfose</em> (Haldar, Ato 1), <em>Anel da Dádiva do Metamorfo</em> (Ato 1, Vaca Estranha) e a incrível <em>Armadura do Banho de Lua (Armor of Moonbasking)</em> do Ato 3, que garante HP temporário e +2 CA quando você se transforma.</li>
            </ul>

            <div class="build-section-title">Mecânicas de Combate</div>
            <ul>
                <li><strong>Combo de Concentração:</strong> A regra de ouro do Druida da Lua é conjurar um feitiço de Concentração de longa duração (como Muralha de Fogo, Névoa Ácida, Convocar Raios ou Praga de Insetos) e, na mesma rodada (usando sua Ação Bônus), transformar-se no Urso-Coruja. A magia continuará ativa enquanto você espanca os inimigos como uma besta gigante.</li>
                <li><strong>Ataque de Queda do Urso-Coruja:</strong> O Salto Devastador (Crushing Flight) do Urso-Coruja não sofre redução de dano de queda. Se você usar magias que aumentam peso (como Aumentar/Enlarge) e pular de lugares altos em cima dos inimigos, você causará danos cataclísmicos em área.</li>
            </ul>
        `
    }
];