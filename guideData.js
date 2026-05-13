// guideData.js
const guideData = [
    {
        sectionTitle: "Um Nautilóide no Inferno (Prólogo)",
        act: 1,
        tasks: [
            { id: "nautiloid_01", text: "Lutar contra um Nautilóide de Devorador de Mentes." },
            { id: "nautiloid_02", text: "Conhecer o 'Devorador' (Us).", type: "companion" },
            { id: "nautiloid_03", text: "Conhecer Lae’zel.", type: "companion" },
            { id: "nautiloid_04", text: "Resgatar Coração Sombrio / Shadowheart.", type: "companion" },
            { id: "nautiloid_05", text: "Fugir do Nautilóide." },
            { id: "nautiloid_06", text: "Derrotar o Comandante Zhalk e pegar a Lâmina Eterna (Everburn Blade).", type: "loot" },
            { id: "nautiloid_07", text: "Coletar os itens Mente Sombria (Dark Mind) e Mente Escrava (Slave Mind) para usar no Ato 2.", type: "loot" },
            { id: "nautiloid_08", text: "Ler a Placa Rúnica (Rune Slate) na sala inicial para ganhar vantagem em testes futuros." }
        ]
    },
    {
        sectionTitle: "Praia Devastada e Deserto",
        act: 1,
        tasks: [
            { id: "praia_01", text: "Recrutar Coração Sombrio (Shadowheart).", type: "companion" },
            { id: "praia_02", text: "Recrutar Astarion.", type: "companion" },
            { id: "praia_03", text: "Recrutar Lae’zel.", type: "companion" },
            { id: "praia_04", text: "Recrutar Gale.", type: "companion" },
            { id: "praia_05", text: "Despachar o Ataque de Goblins no portão." }
        ]
    },
    {
        sectionTitle: "Capela das Ruínas Cobertas de Vegetação",
        act: 1,
        tasks: [
            { id: "capela_00", text: "Lidar com o grupo de saqueadores (Gimli e os outros) do lado de fora das ruínas." },
            { id: "capela_01", text: "Fazer o seu caminho para a capela." },
            { id: "capela_02", text: "Matar os Foragidos." },
            { id: "capela_03", text: "Conhecer Withers (Murcho) e Sobreviver aos mortos-vivos.", type: "companion" }
        ]
    },
    {
        sectionTitle: "O Bosque Esmeralda",
        act: 1,
        tasks: [
            { id: "bosque_01", text: "Salvar Nadira da Aranha Assassina." },
            { id: "bosque_02", text: "Falar com Zevlor." },
            { id: "bosque_03", text: "Recrutar Wyll.", type: "companion" },
            { id: "bosque_04", text: "Intervir em nome da Goblin Sazza." },
            { id: "bosque_05", text: "Descobrir a Guilda de Ladrões Incipiente (Missão da Mol) e Encontrar Pertences." },
            { id: "bosque_06", text: "Falar com os druidas (Kagha e Rath)." },
            { id: "bosque_07", text: "Salvar a criança Mirkon na praia das harpias." },
            { id: "bosque_08", text: "Salvar a menina Arabella da cobra de Kagha.", type: "danger" },
            { id: "bosque_09", text: "Investigar Kagha e descobrir os Ritos dos Druidas das Sombras.", type: "danger" },
            { id: "bosque_10", text: "Ajudar a barda Alfira com sua canção (Aviso p/ Durge).", type: "companion" },
            { id: "bosque_11", text: "Falar com Dammon e entregar o 1º Ferro Infernal para Karlach.", type: "companion" },
            { id: "bosque_12", text: "Decisão: Roubar o Ídolo de Silvanus (causa guerra) ou ajudar os Druidas.", type: "danger" },
            { id: "bosque_13", text: "Interagir com os Tieflings (Ajudar Guex, comprar de Mattis, conhecer Bex e Danis)." },
            { id: "bosque_14", text: "Falar com o Boi Estranho (Strange Ox) usando Falar com Animais." },
            { id: "bosque_15", text: "Ajudar Padirna (paralisada na despensa) usando Restauração Menor." },
            { id: "bosque_16", text: "Devolver o medalhão roubado para Barth." }
        ]
    },
    {
        sectionTitle: "Casa de Chá da Tia Ethel",
        act: 1,
        tasks: [
            { id: "casa_cha_00", text: "Confrontar o Caçador de Monstros (Gandrel) que está rastreando Astarion." },
            { id: "casa_cha_01", text: "Resgatar Mayrina." },
            { id: "casa_cha_02", text: "Derrotar a Tia Ethel (Hag) e fazer um acordo.", type: "boss" },
            { id: "casa_cha_03", text: "Obter o Cabelo da Tia Ethel (+1 Atributo).", type: "loot" }
        ]
    },
    {
        sectionTitle: "Vila Devastada & Floresta",
        act: 1,
        tasks: [
            { id: "vila_01", text: "Recrutar Arranhão / Scratch.", type: "companion" },
            { id: "vila_02", text: "Encontrar o celeiro e interromper a cena 'íntima' entre o Ogro e o Bugbear." },
            { id: "vila_03", text: "Interagir com os Ogros Iluminados e obter a corneta.", type: "loot" },
            { id: "vila_04", text: "Ajudar Barcus Wroot, o Gnomo amarrado ao moinho." },
            { id: "vila_06", text: "Encontrar o poço para as Profundezas Sussurrantes." },
            { id: "vila_07", text: "Explorar a adega para pegar o livro Necromancia de Thay e o pergaminho do Quasit (Shovel).", type: "loot" },
            { id: "vila_08", text: "Pegar as Luvas do Poder (Gloves of Power) na batalha do portão.", type: "loot" }
        ]
    },
    {
        sectionTitle: "As Profundezas Sussurrantes",
        act: 1,
        tasks: [
            { id: "profundezas_02", text: "Matar a Aranha de Fase gigantesca e pegar a Ametista.", type: "boss" },
            { id: "profundezas_03", text: "Saltar no buraco verde para acessar o Subterrâneo.", type: "danger" }
        ]
    },
    {
        sectionTitle: "Estrada da Ressurreição (Risen Road)",
        act: 1,
        tasks: [
            { id: "estrada_01", text: "Recrutar Karlach.", type: "companion" },
            { id: "estrada_03", text: "Despachar os Falsos Paladinos de Tyr." },
            { id: "estrada_05", text: "Resgatar a Conselheira Florrick do incêndio." },
            { id: "estrada_06", text: "Conhecer Kith'rak Voss (Patrulha Githyanki)." },
            { id: "estrada_07", text: "Encontrar o Esconderijo Zhentarim e resgatar os agentes da caverna dos Gnolls." },
            { id: "estrada_08", text: "Pegar a Espada da Justiça com o falso paladino Anders.", type: "loot" },
            { id: "estrada_09", text: "Resgatar Benryn do segundo andar em chamas no Descanso de Waukeen." }
        ]
    },
    {
        sectionTitle: "Acampamento Goblin & Santuário",
        act: 1,
        tasks: [
            { id: "acamp_goblin_02", text: "Encontrar Volo no pátio." },
            { id: "acamp_goblin_03", text: "Recrutar o Filhote de Urso-Coruja (Owlbear).", type: "companion" },
            { id: "santuario_01", text: "Lidar com a Sacerdotisa Gut.", type: "boss" },
            { id: "santuario_02", text: "Participar do ritual de dor com Abdirak (Sacerdote de Loviatar) para buff permanente.", type: "loot" },
            { id: "santuario_03", text: "Derrotar Dror Ragzlin.", type: "boss" },
            { id: "santuario_04", text: "Resgatar Halsin (ou Recrutar Minthara).", type: "companion" },
            { id: "acamp_goblin_04", text: "Decisão: Libertar a goblin Sazza da prisão ou matá-la." },
            { id: "acamp_goblin_05", text: "Jogar 'Chicken Chase' com a goblin Krolla." },
            { id: "santuario_05", text: "Resgatar Volo da jaula e realizar a cirurgia no olho no acampamento.", type: "companion" }
        ]
    },
    {
        sectionTitle: "O Subterrâneo (Underdark)",
        act: 1,
        tasks: [
            { id: "underdark_00", text: "Explorar a Torre Arcana, derrotar Bernard e pegar o Banquinho de Força do Gigante da Colina.", type: "loot" },
            { id: "underdark_01", text: "Encontrar o Posto Avançado Selunita e ler seus registros ocultos." },
            { id: "underdark_02", text: "Combater o Espectador.", type: "boss" },
            { id: "underdark_03", text: "Derrotar o Bulette (o tubarão terrestre)." },
            { id: "underdark_04", text: "Encontrar Omeluum na colônia para a missão de investigar o parasita." },
            { id: "underdark_05", text: "Conhecer os Soberanos na Colônia de Miconídeos." },
            { id: "underdark_07", text: "Obter a Casca de Sussur.", type: "loot" },
            { id: "underdark_09", text: "Conhecer o deus BOOOAL (Kuo-toas) na Enseada Purulenta." },
            { id: "underdark_10", text: "Curar a gnoma Thulla com o antídoto na colônia Myconid.", type: "loot" },
            { id: "underdark_11", text: "Salvar o anão Baelen do campo de cogumelos Bibberbangs." },
            { id: "underdark_12", text: "Derrotar Filro o Esquecido e montar o cajado Gelo Lúgubre.", type: "loot" },
            { id: "underdark_13", text: "Ajudar a revolução dos escravos Duergar contra Nere e decidir o lado entre Spaw vs Glut (Vingança de Glut)." }
        ]
    },
    {
        sectionTitle: "Grymforge",
        act: 1,
        tasks: [
            { id: "grymforge_00", text: "Encontrar a gnoma Philomeen escondida e obter o Barril de Pólvora Rúnica.", type: "loot" },
            { id: "grymforge_01", text: "Limpar o desabamento e resgatar/matar Nere.", type: "boss" },
            { id: "grymforge_04", text: "Pegar o Amuleto Senciente no baú de lava (Inicia a missão do Monge Amaldiçoado).", type: "loot" },
            { id: "grymforge_06", text: "Usar os minérios na Forja Adamantina.", type: "loot" },
            { id: "grymforge_07", text: "Derrotar o Guardião Grym.", type: "boss" },
            { id: "grymforge_08", text: "Pegar o elevador para o Ato 2.", type: "danger" },
            { id: "grymforge_09", text: "Salvar o gnomo Barcus Wroot novamente (da escravidão na roda d'água)." }
        ]
    },
    {
        sectionTitle: "Passo da Montanha & Creche Y'llek",
        act: 1,
        tasks: [
            { id: "mosteiro_01", text: "Falar com Elminster no caminho para estabilizar a bomba de Gale.", type: "companion" },
            { id: "mosteiro_02", text: "Resolver o quebra-cabeça e pegar o Brasão da Alvorada." },
            { id: "creche_02", text: "Tentar remover o parasita no Zaith’isk da doutora." },
            { id: "creche_04", text: "Falar com a Rainha Vlaakith e entrar no Prisma Astral.", type: "danger" },
            { id: "creche_05", text: "Combater o Inquisidor Ch'r'ai W'wargaz.", type: "boss" },
            { id: "creche_07", text: "Usar o Brasão para pegar o Sangue de Lathander.", type: "loot" },
            { id: "creche_08", text: "Decisão: Vender o Ovo Githyanki para Lady Esther ou guardá-lo." }
        ]
    },
    {
        sectionTitle: "Ato 2: Terras Amaldiçoadas",
        act: 2,
        tasks: [
            { id: "ato2_03", text: "Matar ou enganar o Drider Kar'niss para roubar a Lanterna Lunar.", type: "loot" },
            { id: "lastlight_00", text: "Acordar Art Cullagh tocando alaúde para ele na Estalagem da Última Luz." },
            { id: "lastlight_01", text: "Conhecer Jaheira e obter a ajuda dos Harpistas.", type: "companion" },
            { id: "lastlight_04", text: "Defender Isobel durante o ataque de Marcus na Última Luz.", type: "danger" },
            { id: "reithwin_00", text: "Investigar a Resistência Selunita nos porões da Guilda dos Pedreiros." },
            { id: "reithwin_01", text: "Derrotar Gerringothe Thorm (Colecionadora de Pedágios).", type: "boss" },
            { id: "reithwin_02", text: "Derrotar Thisobald Thorm na Taverna.", type: "boss" },
            { id: "reithwin_03", text: "Derrotar Malus Thorm na Casa de Cura e descobrir o destino dos pais de Arabella.", type: "boss" },
            { id: "ato2_04", text: "Ajudar Halsin a resgatar Thaniel e curar as terras.", type: "companion" },
            { id: "ato2_05", text: "Salvar Rolan, Lia e Cal das emboscadas nas sombras densas." },
            { id: "ato2_06", text: "Falar com Dammon na Última Luz e entregar o 2º Ferro Infernal.", type: "companion" },
            { id: "ato2_07", text: "Lidar com o sequestro de Mol pelas bestas aladas." },
            { id: "ato2_08", text: "Encontrar 'Aquele Que Era' (He Who Was) e julgar Madeline (Punish the Wicked)." },
            { id: "ato2_09", text: "Falar com Araj Oblodra nas Torres Moonrise e obter a Poção de Força com Astarion.", type: "loot" },
            { id: "ato2_10", text: "Encontrar os anéis 'True Love's Caress/Embrace' no cemitério e na Casa de Cura.", type: "loot" },
            { id: "ato2_11", text: "Resolver o puzzle da estátua na praça central de Reithwin." }
        ]
    },
    {
        sectionTitle: "Manopla de Shar",
        act: 2,
        tasks: [
            { id: "shar_03", text: "Conhecer e decidir o destino de Balthazar." },
            { id: "shar_04", text: "Lidar com o Orthon Yurgir.", type: "boss" },
            { id: "shar_05", text: "Completar as três Provações de Shar para as Gemas." },
            { id: "shar_06", text: "Descer ao Pendor das Sombras (Aviso: Ponto sem volta!) e decidir o destino da Canção da Noite.", type: "danger" }
        ]
    },
    {
        sectionTitle: "Torres do Nascer da Lua & Colônia",
        act: 2,
        tasks: [
            { id: "moonrise_02", text: "Explorar o Ogre no primeiro andar e investigar os 'Sons Suspeitos' (Suspicious Sounds)." },
            { id: "moonrise_03", text: "Resgatar Wulbren e os Tieflings da prisão." },
            { id: "moonrise_07", text: "Lutar contra Ketheric Thorm no telhado.", type: "boss" },
            { id: "colony_01", text: "Resolver o puzzle dos painéis neurais e cabeças enjauladas no Laboratório.", type: "loot" },
            { id: "colony_03", text: "Resgatar Mizora das cápsulas." },
            { id: "colony_07", text: "Derrotar Ketheric Thorm e o Apóstolo de Myrkul.", type: "boss" },
            { id: "colony_08", text: "Encontrar Zevlor infectado e decidir o destino dos Pods.", type: "companion" }
        ]
    },
    {
        sectionTitle: "Ato 3: A Cidade Baixa e Arredores",
        act: 3,
        tasks: [
            { id: "act3_01", text: "Alimentar o recém-nascido Devorador de Mentes escondido no moinho em Rivington." },
            { id: "act3_02", text: "Ajudar a contrabandear o Boi Estranho (Devilish Ox) para dentro de Baldur's Gate." },
            { id: "act3_03", text: "Assistir à cerimônia de coroação de Gortash." },
            { id: "act3_04", text: "Enfrentar Ansur, o Dragão de Bronze, no subsolo (Wyrmway).", type: "boss" },
            { id: "lowercity_01", text: "Impedir a Imprensa (Stop the Presses) de publicar manchetes difamatórias sobre você." },
            { id: "lowercity_02", text: "Taverna Sereia Corada: Parar a Tia Ethel e salvar a garota Vanra.", type: "boss" },
            { id: "lowercity_03", text: "Casa da Dor: Enfrentar Viconia no Claustro.", type: "boss" },
            { id: "lowercity_04", text: "Torre de Ramazith: Lidar com Lorroakan e saquear cofres.", type: "loot" },
            { id: "lowercity_05", text: "Encontrar o Servo de Mystic Carrion (Thrumbo) e decidir de qual lado ficar." },
            { id: "lowercity_06", text: "Casa da Esperança: Resgatar Hope, matar Raphael, pegar Martelo.", type: "boss" },
            { id: "lowercity_07", text: "Palácio Szarr: Decidir destino de Cazador e Astarion.", type: "boss" },
            { id: "lowercity_08", text: "Explorar o Circo: Teste de amor, Palhaço Dribbles e anel do Djinn Akabi.", type: "loot" },
            { id: "lowercity_09", text: "Salvar Cora Highberry do Doppelganger de Bhaal." },
            { id: "lowercity_10", text: "Investigar Arfur Gregorio e os bonecos explosivos." },
            { id: "lowercity_11", text: "Ajudar Devella no Tabernáculo a impedir os assassinatos em série." },
            { id: "lowercity_12", text: "Encontrar Dammon na Cidade Baixa e dar o último upgrade da Karlach.", type: "companion" },
            { id: "lowercity_13", text: "Ajudar o Monge Amaldiçoado do amuleto a encontrar sua neta (Shirra)." },
            { id: "lowercity_14", text: "Vingar as sacerdotisas do Templo de Umberlee (Os Afogados) e lidar com Redhammer." },
            { id: "lowercity_15", text: "Resolver o assalto à Casa de Contabilidade (Banco) e devolver o ouro a Rakath.", type: "loot" },
            { id: "lowercity_16", text: "Investigar e libertar o Artista Oskar Fevras da possessão." }
        ]
    },
    {
        sectionTitle: "Fundição, Esgotos e Final",
        act: 3,
        tasks: [
            { id: "gortash_02", text: "Sobreviver ao Trono de Ferro e resgatar os reféns." },
            { id: "gortash_04", text: "Destruir a Fundição e o Titã de Aço.", type: "boss" },
            { id: "gortash_05", text: "Eliminar o Lorde Gortash na Rocha do Wyrm.", type: "boss" },
            { id: "sewers_02", text: "Recrutar Minsc (e Boo!).", type: "companion" },
            { id: "sewers_04", text: "Enfrentar Orin, a Vermelha, no Templo de Bhaal.", type: "boss" },
            { id: "end_04", text: "Derrotar o Cérebro Ancião (Netherbrain).", type: "danger" },
            { id: "sewers_05", text: "Lidar com o rapto de um companheiro por Orin nos esgotos (Lae'zel, Gale ou Halsin).", type: "danger" }
        ]
    }
];