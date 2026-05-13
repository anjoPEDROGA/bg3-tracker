// lootData.js
const lootData = [
    {
        act: 1,
        sectionTitle: "Artefatos Essenciais",
        items: [
            { id: "everburn_blade", name: "Lâmina Eterna (Everburn Blade)", location: "Nautilóide (Comandante Zhalk)", description: "Espada Larga 2d6 com dano de fogo permanente.", rarity: "uncommon", type: "weapon", recommendedFor: ["Karlach", "Lae'zel"] },
            { id: "blood_of_lathander", name: "Sangue de Lathander", location: "Mosteiro de Rosymorn (Creche Y'llek)", description: "Maça lendária com cura, luz solar e cegueira contra mortos-vivos.", rarity: "legendary", type: "weapon", recommendedFor: ["Shadowheart - Pilar Radiante"] },
            { id: "phalar_aluve", name: "Phalar Aluve", location: "Subterrâneo (Perto do Posto Avançado Selunita)", description: "Espada longa versátil com auras Shriek/Sing. Excelente para debuffs.", rarity: "rare", type: "weapon", recommendedFor: ["Suporte", "Shadowheart"] },
            { id: "adamantine_forge", name: "Equipamentos de Adamantina", location: "Grymforge", description: "Imunidade a críticos e aplica Reeling aos atacantes (Armaduras, Escudo ou Armas).", rarity: "rare", type: "armor", recommendedFor: ["Lae'zel", "Qualquer Tank"] },
            { id: "mourning_frost", name: "Gelo Lúgubre (Mourning Frost)", location: "Subterrâneo (Combinar as 3 partes dos Drows)", description: "Cajado poderoso que aplica o status Gélido.", rarity: "rare", type: "weapon", recommendedFor: ["Gale - Mago"] },
            { id: "spellsparkler", name: "O Faísca (The Spellsparkler)", location: "Descanso de Waukeen (Salvar Florrick)", description: "Gera cargas de relâmpago ao causar dano mágico.", rarity: "rare", type: "weapon", recommendedFor: ["Gale", "Wyll"] },
            { id: "sword_of_justice", name: "Espada da Justiça", location: "Estrada da Ressurreição (Paladino Anders)", description: "Permite conjurar Escudo da Fé gratuitamente.", rarity: "rare", type: "weapon", recommendedFor: ["Minthara - Lockadin"] }
        ]
    },
    {
        act: 1,
        sectionTitle: "Equipamentos de Build",
        items: [
            { id: "sparkle_hands", name: "Mãos Cintilantes (The Sparkle Hands)", location: "Pântano (Árvore no lago)", description: "Gera Cargas de Relâmpago em ataques desarmados.", rarity: "uncommon", type: "gloves", recommendedFor: ["Monge da Mão Aberta"] },
            { id: "titanstring", name: "Arco Corda de Titã (Titanstring Bow)", location: "Esconderijo Zhentarim (Comerciante Brem)", description: "Adiciona modificador de Força ao dano do arco.", rarity: "rare", type: "weapon", recommendedFor: ["Astarion - Assassino"] },
            { id: "luminous_armor", name: "Armadura Luminosa", location: "Posto Avançado Selunita (Sala secreta)", description: "Ao causar dano radiante, aplica Orbe Radiante em área.", rarity: "uncommon", type: "armor", recommendedFor: ["Shadowheart - Pilar Radiante"] },
            { id: "ring_of_protection", name: "Anel de Proteção", location: "Bosque Esmeralda (Recompensa de Mol)", description: "+1 na CA e nos Testes de Resistência.", rarity: "rare", type: "ring", recommendedFor: ["Qualquer Classe"] },
            { id: "boots_of_speed", name: "Botas da Velocidade", location: "Subterrâneo (Curar a Gnoma Thulla)", description: "Permite usar Clique nos Calcanhares como Ação Bônus (Dobra o movimento).", rarity: "rare", type: "boots", recommendedFor: ["Monge", "Guerreiro"] },
            { id: "whispering_promise", name: "A Promessa Sussurrante", location: "Volo (Comércio no acampamento)", description: "Anel que aplica Bênção automática em quem você curar.", rarity: "uncommon", type: "ring", recommendedFor: ["Shadowheart"] },
            { id: "caustic_band", name: "Banda Cáustica (Caustic Band)", location: "Colônia Myconid (Derryth Bonecloak)", description: "Adiciona +2 Dano Ácido em ataques com arma.", rarity: "uncommon", type: "ring", recommendedFor: ["Karlach", "Astarion"] },
            { id: "gloves_archery", name: "Luvas de Arquearia", location: "Acampamento Goblin (Grat the Trader)", description: "+2 dano com ataques à distância e proficiência.", rarity: "uncommon", type: "gloves", recommendedFor: ["Astarion"] },
            { id: "crushers_ring", name: "Anel do Crusher", location: "Acampamento Goblin (Crusher)", description: "Aumenta o movimento em 3m.", rarity: "uncommon", type: "ring", recommendedFor: ["Karlach", "Monge"] },
            { id: "amulet_misty_step", name: "Amuleto do Passo Nebuloso", location: "Acampamento Goblin (Quarto de Polma)", description: "Concede a magia Passo Nebuloso.", rarity: "uncommon", type: "amulet", recommendedFor: ["Qualquer Classe"] }
        ]
    },
    {
        act: 1,
        sectionTitle: "Buffs Permanentes & Consumíveis",
        items: [
            { id: "hag_hair", name: "Cabelo da Tia Ethel", location: "Casa de Chá da Tia Ethel", description: "+1 permanente em um atributo à sua escolha.", rarity: "special", type: "permanent", recommendedFor: ["Tav / Durge"] },
            { id: "volo_eye", name: "Olho Substituto do Volo", location: "Acampamento (Após resgatá-lo)", description: "Permite ver invisibilidade permanentemente.", rarity: "special", type: "permanent", recommendedFor: ["Tav / Durge"] },
            { id: "necromancy_thay", name: "Necromancia de Thay", location: "Adega da Vila Devastada", description: "Livro maligno (Leia e passe nos testes para ganhar feitiços no Ato 3).", rarity: "special", type: "consumable", recommendedFor: ["Gale", "Astarion"] },
            { id: "zaithisk", name: "O Despertar do Zaith'isk", location: "Creche Y'llek (Enfermaria)", description: "Passar nos 3 testes converte o custo de todos os Poderes Ilítides em Ação Bônus.", rarity: "special", type: "permanent", recommendedFor: ["Tav / Durge"] },
            { id: "sussur_bark", name: "Casca de Sussur (Armas de Sussur)", location: "Subterrâneo (Árvore de Sussur) e Vila Devastada", description: "Forja uma Espada Grande, Adaga ou Foice que Silencia inimigos no acerto.", rarity: "rare", type: "weapon", recommendedFor: ["Astarion", "Lae'zel"] }
        ]
    },
    {
        act: 2,
        sectionTitle: "Artefatos & Build",
        items: [
            { id: "potent_robe", name: "Veste Potente (Potent Robe)", location: "Last Light Inn (Salvar Tieflings no Ato 2)", description: "Adiciona Carisma ao dano de truques (Cantrips).", rarity: "rare", type: "armor", recommendedFor: ["Wyll", "Feiticeiros"] },
            { id: "resonance_stone", name: "Pedra da Ressonância", location: "Colônia Devoradora de Mentes", description: "Aura que dobra todo o dano psíquico causado a quem estiver próximo.", rarity: "rare", type: "item", recommendedFor: ["Lae'zel - Campeã"] },
            { id: "risky_ring", name: "Anel Arriscado (Risky Ring)", location: "Torres do Nascer da Lua (Araj Oblodra)", description: "Vantagem em TODOS os ataques, Desvantagem em testes de resistência.", rarity: "rare", type: "ring", recommendedFor: ["Astarion - Assassino"] },
            { id: "potion_everlasting_vigour", name: "Poção do Vigor Eterno", location: "Torres do Nascer da Lua (Araj Oblodra)", description: "+2 de Força Permanente (Faça Astarion morder Araj).", rarity: "special", type: "permanent", recommendedFor: ["Monge", "Karlach"] },
            { id: "killers_sweetheart", name: "Amor da Assassina (Killer's Sweetheart)", location: "Manopla de Shar (Prova de Salto, cofre escondido)", description: "Garante um Acerto Crítico automático após matar uma criatura.", rarity: "rare", type: "ring", recommendedFor: ["Astarion", "Minthara"] },
            { id: "dark_justiciar_armor", name: "Armadura do Justiceiro Sombrio", location: "Manopla de Shar", description: "Excelente armadura média que concede Vantagem em Furtividade.", rarity: "rare", type: "armor", recommendedFor: ["Shadowheart", "Astarion"] },
            { id: "moonlantern", name: "Lanterna Lunar", location: "Emboscada do Drider Kar'niss", description: "Item obrigatório para andar nas partes mais densas das Sombras sem morrer.", rarity: "special", type: "item", recommendedFor: ["Qualquer Classe"] },
            { id: "flawed_helldusk_armor", name: "Armadura do Crepúsculo Infernal Falha", location: "Last Light Inn (Dammon com Ferro Infernal)", description: "Boa armadura pesada com retaliação de fogo.", rarity: "rare", type: "armor", recommendedFor: ["Lae'zel", "Minthara"] },
            { id: "hat_fire_acuity", name: "Chapéu de Acuidade de Fogo", location: "Last Light Inn (Matar Boi Estranho)", description: "Aumenta Spell DC ao causar dano de fogo.", rarity: "rare", type: "helmet", recommendedFor: ["Gale", "Wyll"] },
            { id: "halberd_vigilance", name: "Alabarda da Vigilância", location: "Torres da Lua (Lann Tarv)", description: "Arma com +1 Iniciativa, vantagem em Percepção e Reações.", rarity: "rare", type: "weapon", recommendedFor: ["Lae'zel", "Karlach"] },
            { id: "ketheric_shield", name: "Escudo de Ketheric", location: "Colônia Ilítide (Corpo de Ketheric)", description: "+1 Spell DC, vantagem em testes de Destreza.", rarity: "rare", type: "shield", recommendedFor: ["Shadowheart", "Gale"] }
        ]
    },
    {
        act: 3,
        sectionTitle: "Artefatos Essenciais",
        items: [
            { id: "markoheshkir", name: "Markoheshkir", location: "Torre de Ramazith", description: "Conjuração de feitiço grátis e auras elementais massivas.", rarity: "legendary", type: "weapon", recommendedFor: ["Gale - Mago"] },
            { id: "helldusk_armor", name: "Armadura do Crepúsculo Infernal", location: "Casa da Esperança (Raphael)", description: "21 CA, você é considerado proficiente ao vesti-la.", rarity: "legendary", type: "armor", recommendedFor: ["Qualquer Classe"] },
            { id: "silver_sword_astral", name: "Espada de Prata do Plano Astral", location: "Kith'rak Voss", description: "Dano Psíquico e resistência absoluta para Githyankis.", rarity: "legendary", type: "weapon", recommendedFor: ["Lae'zel - Campeã"] },
            { id: "balduran_giantslayer", name: "Matadora de Gigantes de Balduran", location: "Toca do Dragão Ansur (Wyrmway)", description: "Dobra o bônus de Força no dano e dá vantagem contra grandes inimigos.", rarity: "legendary", type: "weapon", recommendedFor: ["Lae'zel", "Karlach"] },
            { id: "helm_of_balduran", name: "Elmo de Balduran", location: "Toca do Dragão Ansur (Wyrmway)", description: "Cura 2 PV por turno, +2 na CA e imunidade a atordoamento.", rarity: "legendary", type: "helmet", recommendedFor: ["Minthara", "Shadowheart"] },
            { id: "nyrulna", name: "Nyrulna", location: "Circo (Ganhar o Jackpot do Djinni)", description: "Tridente de arremesso que retorna e causa dano trovejante.", rarity: "legendary", type: "weapon", recommendedFor: ["Karlach"] }
        ]
    },
    {
        act: 3,
        sectionTitle: "Equipamentos de Build",
        items: [
            { id: "soul_catching", name: "Luvas de Captura de Almas", location: "Casa da Esperança (Salvar Hope)", description: "Adiciona 1d10 de Dano de Força desarmado e cura ao bater.", rarity: "legendary", type: "gloves", recommendedFor: ["Monge da Mão Aberta"] },
            { id: "bhaalist_armor", name: "Armadura Bhaalista", location: "Tribunal do Assassinato", description: "Aura que dobra o dano perfurante dos inimigos ao redor.", rarity: "rare", type: "armor", recommendedFor: ["Astarion - Assassino"] },
            { id: "amulet_devout", name: "Amuleto do Devoto", location: "Tabernáculo de Graças (Porão)", description: "+2 em CD de Magia e +1 Carga de Canalizar Divindade.", rarity: "rare", type: "amulet", recommendedFor: ["Shadowheart", "Gale"] },
            { id: "cloak_of_weave", name: "Manto da Trama (Cloak of the Weave)", location: "Tesouro do Lorroakan (Torre Ramazith)", description: "+1 na CD de Magia e Absorver Elementos.", rarity: "rare", type: "cloak", recommendedFor: ["Gale - Mago"] },
            { id: "amulet_greater_health", name: "Amuleto da Maior Saúde", location: "Casa da Esperança (Cofre)", description: "Fixa a Constituição em 23 e dá vantagem em testes de CON.", rarity: "rare", type: "amulet", recommendedFor: ["Shadowheart", "Gale"] },
            { id: "gauntlets_hill_giant", name: "Manoplas da Força do Gigante da Colina", location: "Casa da Esperança (Cofre)", description: "Fixa a Força em 23.", rarity: "rare", type: "gloves", recommendedFor: ["Monge da Mão Aberta"] },
            { id: "spellmight_gloves", name: "Luvas de Força Mágica (Spellmight)", location: "Circo (Terminar Dribbles the Clown)", description: "Penalidade em testes de ataque mágico para ganhar 1d8 de dano extra.", rarity: "rare", type: "gloves", recommendedFor: ["Wyll", "Feiticeiros"] },
            { id: "mystic_scoundrel", name: "Anel do Canalha Místico (Mystic Scoundrel)", location: "Selva de Chult (Jackpot do Djinni)", description: "Feitiços de Ilusão/Encantamento viram Ação Bônus ao atacar com arma.", rarity: "rare", type: "ring", recommendedFor: ["Astarion", "Bardos"] },
            { id: "dwarven_thrower", name: "Arremessadora Anã (Dwarven Thrower)", location: "Rivington (Ferg Drogher)", description: "Martelo de arremesso absurdamente forte para Anões.", rarity: "rare", type: "weapon", recommendedFor: ["Karlach (Se Disfarçada de Anã)"] },
            { id: "armor_persistence", name: "Armadura da Persistência", location: "Lower City (Dammon)", description: "Dá resistência permanente a dano cortante/perfurante/concussão e Vantagem.", rarity: "rare", type: "armor", recommendedFor: ["Lae'zel", "Minthara"] },
            { id: "legacy_masters", name: "Legado dos Mestres", location: "Lower City (Dammon)", description: "+2 bônus de dano e ataque com armas.", rarity: "rare", type: "gloves", recommendedFor: ["Lae'zel", "Astarion"] },
            { id: "viconia_fortress", name: "Fortaleza Caminhante de Viconia", location: "Casa da Dor (Corpo de Viconia)", description: "O melhor escudo do jogo, reflete dano em inimigos.", rarity: "legendary", type: "shield", recommendedFor: ["Shadowheart"] },
            { id: "gontr_mael", name: "Gontr Mael", location: "Fundição do Relógio de Aço", description: "Arco lendário que conjura Raio Guiador e dá Rapidez.", rarity: "legendary", type: "weapon", recommendedFor: ["Astarion"] },
            { id: "armor_agility", name: "Armadura de Agilidade", location: "Arsenal de Stormshore", description: "Soma TODO o seu bônus de Destreza na Classe de Armadura.", rarity: "rare", type: "armor", recommendedFor: ["Astarion", "Guerreiro DES"] },
            { id: "dead_shot", name: "O Tiro Fatal (The Dead Shot)", location: "Arsenal de Stormshore (Fytz)", description: "Dobra seu bônus de proficiência no acerto, expande margem de crítico.", rarity: "rare", type: "weapon", recommendedFor: ["Astarion", "Ladino"] }
        ]
    },
    {
        act: 3,
        sectionTitle: "Buffs Permanentes",
        items: [
            { id: "mirror_loss", name: "Espelho da Perda", location: "Casa da Dor (Claustro)", description: "Sacrifique uma memória para ganhar +2 em um atributo e +1 em outro.", rarity: "special", type: "permanent", recommendedFor: ["Qualquer Classe"] },
            { id: "danse_macabre", name: "Dança Macabra (Danse Macabre)", location: "Cofres Feiticeiros (Códice Tharchiate)", description: "Poder para invocar 4 carniçais permanentes (termina o livro de Thay).", rarity: "special", type: "permanent", recommendedFor: ["Gale", "Astarion"] }
        ]
    }
];