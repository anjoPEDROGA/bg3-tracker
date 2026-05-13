// lootData.js
const lootData = [
    {
        act: 1,
        sectionTitle: "Artefatos Essenciais",
        items: [
            { id: "everburn_blade", name: "Lâmina Eterna (Everburn Blade)", location: "Nautilóide (Comandante Zhalk)", description: "Espada Larga 2d6 com dano de fogo permanente.", rarity: "uncommon", type: "weapon", recommendedFor: ["Karlach", "Lae'zel"], relatedQuest: "nautiloid_06", missable: true },
            { id: "blood_of_lathander", name: "Sangue de Lathander", location: "Mosteiro de Rosymorn / Creche Y'llek (Usar o Brasão)", description: "Maça lendária com cura, luz solar e cegueira contra mortos-vivos.", rarity: "legendary", type: "weapon", recommendedFor: ["Shadowheart - Pilar Radiante"], relatedQuest: "creche_07", missable: true },
            { id: "phalar_aluve", name: "Phalar Aluve", location: "Subterrâneo (Pedra perto do Posto Avançado Selunita)", description: "Espada longa versátil com auras Shriek/Sing. Excelente para debuffs.", rarity: "rare", type: "weapon", recommendedFor: ["Suporte", "Shadowheart"], relatedQuest: "underdark_14" },
            { id: "adamantine_forge", name: "Equipamentos de Adamantina", location: "Grymforge (Forja Adamantina)", description: "Imunidade a críticos e aplica Reeling aos atacantes. Armaduras, Escudo ou Armas.", rarity: "rare", type: "armor", recommendedFor: ["Lae'zel", "Qualquer Tank"], relatedQuest: "grymforge_06" },
            { id: "mourning_frost", name: "Gelo Lúgubre (Mourning Frost)", location: "Subterrâneo (Combinar as 3 partes dos Drows)", description: "Cajado poderoso que aplica o status Gélido em todos os alvos atingidos.", rarity: "rare", type: "weapon", recommendedFor: ["Gale - Mago"], relatedQuest: "underdark_12" },
            { id: "spellsparkler", name: "O Faísca (The Spellsparkler)", location: "Descanso de Waukeen (Salvar Florrick do incêndio)", description: "Gera cargas de relâmpago ao causar dano mágico.", rarity: "rare", type: "weapon", recommendedFor: ["Gale", "Wyll"], relatedQuest: "estrada_10" },
            { id: "sword_of_justice", name: "Espada da Justiça", location: "Estrada da Ressurreição (Matar o falso paladino Anders)", description: "Permite conjurar Escudo da Fé gratuitamente.", rarity: "rare", type: "weapon", recommendedFor: ["Minthara - Lockadin"], relatedQuest: "estrada_08" }
        ]
    },
    {
        act: 1,
        sectionTitle: "Equipamentos de Build",
        items: [
            { id: "sparkle_hands", name: "Mãos Cintilantes (The Sparkle Hands)", location: "Pântano (Árvore no lago perto da Casa da Tia Ethel)", description: "Gera Cargas de Relâmpago em ataques desarmados.", rarity: "uncommon", type: "gloves", recommendedFor: ["Monge da Mão Aberta"] },
            { id: "graceful_cloth", name: "Traje Gracioso (The Graceful Cloth)", location: "Bosque Esmeralda (Vendedora Dammon ou Ethel)", description: "+2 de Destreza. Essencial para builds baseadas em DES.", rarity: "uncommon", type: "armor", recommendedFor: ["Monge da Mão Aberta", "Astarion - Assassino"] },
            { id: "titanstring", name: "Arco Corda de Titã (Titanstring Bow)", location: "Esconderijo Zhentarim (Comerciante Brem)", description: "Adiciona modificador de Força ao dano do arco.", rarity: "rare", type: "weapon", recommendedFor: ["Astarion - Assassino"], relatedQuest: "creche_09" },
            { id: "luminous_armor", name: "Armadura Luminosa", location: "Posto Avançado Selunita (Sala secreta no Subterrâneo)", description: "Ao causar dano radiante, aplica Orbe Radiante em área. BiS para Shadowheart.", rarity: "uncommon", type: "armor", recommendedFor: ["Shadowheart - Pilar Radiante"], relatedQuest: "underdark_01" },
            { id: "ring_of_protection", name: "Anel de Proteção", location: "Bosque Esmeralda (Recompensa de Mol)", description: "+1 na CA e nos Testes de Resistência.", rarity: "rare", type: "ring", recommendedFor: ["Qualquer Classe"], relatedQuest: "bosque_17" },
            { id: "boots_of_speed", name: "Botas da Velocidade", location: "Subterrâneo (Curar a Gnoma Thulla na Colônia Myconid)", description: "Permite usar Clique nos Calcanhares como Ação Bônus (Dobra o movimento).", rarity: "rare", type: "boots", recommendedFor: ["Monge", "Guerreiro"], relatedQuest: "underdark_10" },
            { id: "whispering_promise", name: "A Promessa Sussurrante", location: "Volo (Comércio no acampamento após resgatar)", description: "Anel que aplica Bênção automática em quem você curar.", rarity: "uncommon", type: "ring", recommendedFor: ["Shadowheart"] },
            { id: "caustic_band", name: "Banda Cáustica (Caustic Band)", location: "Colônia Myconid (Commerciante Derryth Bonecloak)", description: "Adiciona +2 Dano Ácido em ataques com arma.", rarity: "uncommon", type: "ring", recommendedFor: ["Karlach", "Astarion"] },
            { id: "gloves_archery", name: "Luvas de Arquearia", location: "Acampamento Goblin (Vendedor Grat the Trader)", description: "+2 dano com ataques à distância e proficiência com arcos.", rarity: "uncommon", type: "gloves", recommendedFor: ["Astarion"] },
            { id: "crushers_ring", name: "Anel do Crusher", location: "Acampamento Goblin (Goblin Crusher no pátio)", description: "Aumenta o movimento em 3m.", rarity: "uncommon", type: "ring", recommendedFor: ["Karlach", "Monge"] },
            { id: "amulet_misty_step", name: "Amuleto do Passo Nebuloso", location: "Acampamento Goblin (Quarto de Polma)", description: "Concede a magia Passo Nebuloso.", rarity: "uncommon", type: "amulet", recommendedFor: ["Qualquer Classe"] },
            { id: "gloves_kushigo", name: "Luvas do Kushigo Desinibido", location: "Subterrâneo (Salvar Baelen no campo de Bibberbangs)", description: "Soma o modificador de Sabedoria ao dano de ataques desarmados.", rarity: "uncommon", type: "gloves", recommendedFor: ["Monge da Mão Aberta"], relatedQuest: "underdark_11" },
            { id: "sentient_amulet", name: "Amuleto Senciente", location: "Grymforge (Baú de lava - Inicia a missão do Monge)", description: "Restaura pontos de Ki ao iniciar turno. Inicia a quest do Monge Amaldiçoado.", rarity: "rare", type: "amulet", recommendedFor: ["Monge da Mão Aberta"], relatedQuest: "grymforge_04", missable: true },
            { id: "diadem_arcane", name: "Diadema da Sinergia Arcana", location: "Creche Y'llek (Enfermaria, perto do Zaith'isk)", description: "Soma o Carisma no dano ao ativar um Poder de Classe. Essencial para Lockadin.", rarity: "rare", type: "helmet", recommendedFor: ["Minthara - Lockadin"] },
            { id: "sentinel_shield", name: "Escudo Sentinela", location: "Acampamento Goblin (Vendedor Grat the Trader)", description: "+3 de Iniciativa e vantagem em Percepção e Investigação.", rarity: "uncommon", type: "shield", recommendedFor: ["Shadowheart", "Lae'zel"] }
        ]
    },
    {
        act: 1,
        sectionTitle: "Buffs Permanentes & Consumíveis",
        items: [
            { id: "hag_hair", name: "Cabelo da Tia Ethel", location: "Casa de Chá da Tia Ethel (Poupar a Hag)", description: "+1 permanente em um atributo à sua escolha.", rarity: "special", type: "permanent", recommendedFor: ["Tav / Durge"], relatedQuest: "casa_cha_03", missable: true },
            { id: "volo_eye", name: "Olho Substituto do Volo", location: "Acampamento (Após resgatar Volo da jaula goblin)", description: "Permite ver invisibilidade permanentemente.", rarity: "special", type: "permanent", recommendedFor: ["Tav / Durge"], relatedQuest: "santuario_05", missable: true },
            { id: "necromancy_thay", name: "Necromancia de Thay", location: "Adega da Vila Devastada", description: "Livro maligno — leia e passe nos testes para ganhar feitiços poderosos no Ato 3.", rarity: "special", type: "consumable", recommendedFor: ["Gale", "Astarion"], relatedQuest: "vila_07" },
            { id: "zaithisk", name: "O Despertar do Zaith'isk", location: "Creche Y'llek (Enfermaria — passar nos 3 testes)", description: "Converte o custo de todos os Poderes Ilítides em Ação Bônus.", rarity: "special", type: "permanent", recommendedFor: ["Tav / Durge"], relatedQuest: "creche_02", missable: true },
            { id: "sussur_bark", name: "Casca de Sussur (Armas de Sussur)", location: "Subterrâneo (Árvore de Sussur) + Vila Devastada (Forja)", description: "Forja uma Espada Grande, Adaga ou Foice que Silencia inimigos no acerto.", rarity: "rare", type: "weapon", recommendedFor: ["Astarion", "Lae'zel"], relatedQuest: "underdark_07" }
        ]
    },
    {
        act: 2,
        sectionTitle: "Artefatos & Build",
        items: [
            { id: "potent_robe", name: "Veste Potente (Potent Robe)", location: "Estalagem da Última Luz (Salvar os Tieflings na prisão)", description: "Adiciona Carisma ao dano de truques (Cantrips).", rarity: "rare", type: "armor", recommendedFor: ["Wyll", "Feiticeiros"], relatedQuest: "moonrise_03", missable: true },
            { id: "resonance_stone", name: "Pedra da Ressonância", location: "Colônia Devoradora de Mentes (Puzzle dos painéis)", description: "Aura que dobra todo o dano psíquico causado a quem estiver próximo.", rarity: "rare", type: "item", recommendedFor: ["Lae'zel - Campeã"], relatedQuest: "colony_01" },
            { id: "risky_ring", name: "Anel Arriscado (Risky Ring)", location: "Torres do Nascer da Lua (Araj Oblodra)", description: "Vantagem em TODOS os ataques, mas Desvantagem em testes de resistência.", rarity: "rare", type: "ring", recommendedFor: ["Astarion - Assassino"], relatedQuest: "ato2_09" },
            { id: "potion_everlasting_vigour", name: "Poção do Vigor Eterno", location: "Torres do Nascer da Lua (Araj Oblodra — fazer Astarion morder ela)", description: "+2 de Força Permanente.", rarity: "special", type: "permanent", recommendedFor: ["Monge", "Karlach"], relatedQuest: "ato2_09", missable: true },
            { id: "killers_sweetheart", name: "Amor da Assassina (Killer's Sweetheart)", location: "Manopla de Shar (Prova de Salto — cofre escondido)", description: "Garante um Acerto Crítico automático após matar uma criatura.", rarity: "rare", type: "ring", recommendedFor: ["Astarion", "Minthara"], relatedQuest: "shar_05" },
            { id: "dark_justiciar_armor", name: "Armadura do Justiceiro Sombrio", location: "Manopla de Shar (Salas internas)", description: "Ótima armadura média com Vantagem em Furtividade.", rarity: "rare", type: "armor", recommendedFor: ["Shadowheart", "Astarion"], relatedQuest: "shar_07" },
            { id: "moonlantern", name: "Lanterna Lunar", location: "Emboscada do Drider Kar'niss (Entrada do Ato 2)", description: "Item obrigatório para sobreviver nas sombras densas das Terras Amaldiçoadas.", rarity: "special", type: "item", recommendedFor: ["Qualquer Classe"], relatedQuest: "ato2_03", missable: true },
            { id: "flawed_helldusk_armor", name: "Armadura do Crepúsculo Infernal Falha", location: "Estalagem da Última Luz (Dammon com 2º Ferro Infernal)", description: "Boa armadura pesada com retaliação de fogo.", rarity: "rare", type: "armor", recommendedFor: ["Lae'zel", "Minthara"], relatedQuest: "ato2_06", missable: true },
            { id: "hat_fire_acuity", name: "Chapéu de Acuidade de Fogo", location: "Estalagem da Última Luz (Matar o Boi Estranho)", description: "Aumenta Spell DC ao causar dano de fogo.", rarity: "rare", type: "helmet", recommendedFor: ["Gale", "Wyll"], relatedQuest: "ato2_12", missable: true },
            { id: "halberd_vigilance", name: "Alabarda da Vigilância", location: "Torres do Nascer da Lua (Comerciante Lann Tarv)", description: "+1 Iniciativa, vantagem em Percepção e permite Reações extras.", rarity: "rare", type: "weapon", recommendedFor: ["Lae'zel", "Karlach"] },
            { id: "ketheric_shield", name: "Escudo de Ketheric", location: "Colônia Ilítide (Corpo de Ketheric Thorm)", description: "+1 Spell DC, vantagem em testes de Destreza.", rarity: "rare", type: "shield", recommendedFor: ["Shadowheart", "Gale"], relatedQuest: "colony_07" }
        ]
    },
    {
        act: 3,
        sectionTitle: "Artefatos Essenciais",
        items: [
            { id: "markoheshkir", name: "Markoheshkir", location: "Torre de Ramazith (Lorroakan)", description: "Conjuração de feitiço grátis por descanso e auras elementais massivas.", rarity: "legendary", type: "weapon", recommendedFor: ["Gale - Mago"], relatedQuest: "lowercity_04" },
            { id: "helldusk_armor", name: "Armadura do Crepúsculo Infernal", location: "Casa da Esperança (Raphael)", description: "21 CA, você é considerado proficiente ao vesti-la. Melhor armadura do jogo.", rarity: "legendary", type: "armor", recommendedFor: ["Qualquer Classe"], relatedQuest: "lowercity_06" },
            { id: "silver_sword_astral", name: "Espada de Prata do Plano Astral", location: "Kith'rak Voss (Baldur's Gate)", description: "Dano Psíquico e resistência absoluta para Githyankis. BiS para Lae'zel.", rarity: "legendary", type: "weapon", recommendedFor: ["Lae'zel - Campeã"] },
            { id: "balduran_giantslayer", name: "Matadora de Gigantes de Balduran", location: "Toca do Dragão Ansur (Wyrmway)", description: "Dobra o bônus de Força no dano e dá vantagem contra grandes inimigos.", rarity: "legendary", type: "weapon", recommendedFor: ["Lae'zel", "Karlach"], relatedQuest: "act3_04" },
            { id: "helm_of_balduran", name: "Elmo de Balduran", location: "Toca do Dragão Ansur (Wyrmway)", description: "Cura 2 PV por turno, +2 na CA e imunidade a atordoamento.", rarity: "legendary", type: "helmet", recommendedFor: ["Minthara", "Shadowheart"], relatedQuest: "act3_04" },
            { id: "nyrulna", name: "Nyrulna", location: "Circo de Baldur's Gate (Ganhar o Jackpot do Djinni Akabi)", description: "Tridente de arremesso que retorna e causa dano trovejante em área.", rarity: "legendary", type: "weapon", recommendedFor: ["Karlach"], relatedQuest: "lowercity_08" }
        ]
    },
    {
        act: 3,
        sectionTitle: "Equipamentos de Build",
        items: [
            { id: "soul_catching", name: "Luvas de Captura de Almas", location: "Casa da Esperança (Salvar Hope de Raphael)", description: "Adiciona 1d10 de Dano de Força desarmado e cura ao bater.", rarity: "legendary", type: "gloves", recommendedFor: ["Monge da Mão Aberta"], relatedQuest: "lowercity_06" },
            { id: "bhaalist_armor", name: "Armadura Bhaalista", location: "Tribunal do Assassinato (Orin — seguir a quest)", description: "Aura que dobra o dano perfurante dos inimigos ao redor.", rarity: "rare", type: "armor", recommendedFor: ["Astarion - Assassino"], relatedQuest: "sewers_04", missable: true },
            { id: "amulet_devout", name: "Amuleto do Devoto", location: "Tabernáculo de Graças (Porão — ajudar Devella)", description: "+2 em CD de Magia e +1 Carga de Canalizar Divindade.", rarity: "rare", type: "amulet", recommendedFor: ["Shadowheart", "Gale"], relatedQuest: "lowercity_11" },
            { id: "cloak_of_weave", name: "Manto da Trama (Cloak of the Weave)", location: "Torre de Ramazith (Tesouro de Lorroakan)", description: "+1 na CD de Magia e Absorver Elementos.", rarity: "rare", type: "cloak", recommendedFor: ["Gale - Mago"], relatedQuest: "lowercity_04" },
            { id: "amulet_greater_health", name: "Amuleto da Maior Saúde", location: "Casa da Esperança (Cofre principal)", description: "Fixa a Constituição em 23 e dá vantagem em testes de CON.", rarity: "rare", type: "amulet", recommendedFor: ["Shadowheart", "Gale"], relatedQuest: "lowercity_06" },
            { id: "gauntlets_hill_giant", name: "Manoplas da Força do Gigante da Colina", location: "Casa da Esperança (Cofre principal)", description: "Fixa a Força em 23.", rarity: "rare", type: "gloves", recommendedFor: ["Monge da Mão Aberta"], relatedQuest: "lowercity_06" },
            { id: "spellmight_gloves", name: "Luvas de Força Mágica (Spellmight)", location: "Circo (Terminar a quest do Palhaço Dribbles)", description: "Penalidade em testes de ataque mágico para ganhar 1d8 de dano extra.", rarity: "rare", type: "gloves", recommendedFor: ["Wyll", "Feiticeiros"], relatedQuest: "lowercity_08" },
            { id: "mystic_scoundrel", name: "Anel do Canalha Místico (Mystic Scoundrel)", location: "Circo (Jackpot do Djinni Akabi)", description: "Feitiços de Ilusão/Encantamento viram Ação Bônus ao atacar com arma.", rarity: "rare", type: "ring", recommendedFor: ["Astarion", "Bardos"], relatedQuest: "lowercity_08" },
            { id: "dwarven_thrower", name: "Arremessadora Anã (Dwarven Thrower)", location: "Rivington (Comerciante Ferg Drogher)", description: "Martelo de arremesso absurdamente forte para Anões.", rarity: "rare", type: "weapon", recommendedFor: ["Karlach (Se Disfarçada de Anã)"] },
            { id: "armor_persistence", name: "Armadura da Persistência", location: "Cidade Baixa (Dammon — 3º Ferro Infernal)", description: "Resistência permanente a dano cortante/perfurante/concussão e Vantagem.", rarity: "rare", type: "armor", recommendedFor: ["Lae'zel", "Minthara"], relatedQuest: "lowercity_12", missable: true },
            { id: "legacy_masters", name: "Legado dos Mestres", location: "Cidade Baixa (Dammon — 3º Ferro Infernal)", description: "+2 bônus de dano e ataque com armas.", rarity: "rare", type: "gloves", recommendedFor: ["Lae'zel", "Astarion"], relatedQuest: "lowercity_12", missable: true },
            { id: "viconia_fortress", name: "Fortaleza Caminhante de Viconia", location: "Casa da Dor (Corpo de Viconia)", description: "Melhor escudo do jogo — reflete dano em inimigos.", rarity: "legendary", type: "shield", recommendedFor: ["Shadowheart"], relatedQuest: "lowercity_03" },
            { id: "gontr_mael", name: "Gontr Mael", location: "Fundição do Relógio de Aço (Titã de Aço)", description: "Arco lendário que conjura Raio Guiador e concede Rapidez.", rarity: "legendary", type: "weapon", recommendedFor: ["Astarion"], relatedQuest: "gortash_04" },
            { id: "armor_agility", name: "Armadura de Agilidade", location: "Arsenal de Stormshore (Cidade Baixa)", description: "Soma TODO o bônus de Destreza na Classe de Armadura.", rarity: "rare", type: "armor", recommendedFor: ["Astarion", "Guerreiro DES"] },
            { id: "dead_shot", name: "O Tiro Fatal (The Dead Shot)", location: "Arsenal de Stormshore (Fytz)", description: "Dobra o bônus de proficiência no acerto e expande a margem de crítico.", rarity: "rare", type: "weapon", recommendedFor: ["Astarion", "Ladino"] }
        ]
    },
    {
        act: 3,
        sectionTitle: "Buffs Permanentes",
        items: [
            { id: "mirror_loss", name: "Espelho da Perda", location: "Casa da Dor (Claustro de Viconia)", description: "Sacrifique uma memória para ganhar +2 em um atributo e +1 em outro.", rarity: "special", type: "permanent", recommendedFor: ["Qualquer Classe"], relatedQuest: "lowercity_03" },
            { id: "danse_macabre", name: "Dança Macabra (Danse Macabre)", location: "Cofres Feiticeiros (Códice Tharchiate — terminar livro do Thay)", description: "Poder para invocar 4 carniçais permanentes.", rarity: "special", type: "permanent", recommendedFor: ["Gale", "Astarion"] }
        ]
    }
];