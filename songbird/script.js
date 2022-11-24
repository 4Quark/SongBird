'use strict'

const birdsData = [
  [       
    {
      id: 1,
      name_eng: 'Raven',
      name_rus: 'Ворон',
      species: 'Corvus corax',
      description_eng: 'The raven is a large bird. Their body length reaches 70 centimeters, and their wingspan - up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that on the day when black crows fly away from the Tower, the monarchy will collapse.',
      description_rus: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
    },
    {
      id: 2,
      name_eng: 'Crane',
      name_rus: 'Журавль',
      species: 'Grus grus',
      description_eng: 'The sounds the crane makes are similar to the resounding "kur-ly - kur-ly. Cranes most often sing a duet - one bird starts the chorus with the syllable "kur" and the other picks up the "li". If the bird sings alone, it makes only the "kur" sound.',
      description_rus: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
    },
    {
      id: 3,
      name_eng: 'Swallow',
      name_rus: 'Ласточка',
      species: 'Delichon urbicum',
      description_eng: 'Swallows are characterized by soft chirping. The songs of swallows do not stop during the whole summer. Researchers distinguish up to six chirping sounds in birds: "vith", "vith-vith", "chivit", "chirivit", etc. Swallows like to sing a duet.',
      description_rus: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
    },
    {
      id: 4,
      name_eng: 'Caprimulgus',
      name_rus: 'Козодой',
      species: 'Caprimulgus europaeus',
      description_eng: 'Caprimulgus is an inconspicuous bird known for its voice. The song of Caprimulgus sounds like a monotonous trill similar to the rattle of a motorcycle. This rattling can be heard from dusk to dawn, its tonality, frequency and volume varying.',
      description_rus: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
    },
    {
      id: 5,
      name_eng: 'Cuckoo',
      name_rus: 'Кукушка',
      species: 'Cuculus canorus',
      description_eng: 'The cuckoo is so named because of the peculiarities of its songs. The sonorous "cuckoo" cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos drop their eggs',
      description_rus: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
    },
    {
      id: 6,
      name_eng: 'Tits',
      name_rus: 'Синица',
      species: 'Parus major',
      description_eng: 'More than 40 different sound combinations can be distinguished in the chirping of tits. They sing practically the whole year round, only quieting down a bit in winter. Tits are real forest sanitarians. One pair of tits protects dozens of trees from pests during the nesting period.',
      description_rus: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Parus_major_m.jpg/275px-Parus_major_m.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
    }
  ],
  [
    {
      id: 1,
      name_eng: 'Sparrow',
      name_rus: 'Воробей',
      species: 'Passer domesticus',
      description_eng: 'Sparrows are the most famous and recognizable birds. They are easily recognized by their colorful plumage and cheerful chirping. Sparrows are a synatropic species - they settle close to human habitation.',
      description_rus: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
    },
    {
      id: 2,
      name_eng: 'Rook',
      name_rus: 'Грач',
      species: 'Corvus frugilegus',
      description_eng: 'Rooks are very smart and intelligent birds. They use their beak to create and use simple tools. Rooks have a reflex to the sounds of a tractor. When they hear a "clatter", they fly to the sound - the tractor is plowing the ground, which means that there is a lot of food in the area.',
      description_rus: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
    },
    {
      id: 3,
      name_eng: 'Pebble',
      name_rus: 'Галка',
      species: 'Coloeus monedula',
      description_eng: 'The word "eider" comes from the Old Slavonic language and is translated as "black. Ravens or other black birds are often called with this word. The Latin name of an eider "monedula" is associated with the word coin for the bird`s love of shiny and bright things.',
      description_rus: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
      image: 'https://zooclub.ru/attach/1484.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
    },
    {
      id: 4,
      name_eng: 'Song thrush',
      name_rus: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description_eng: 'The thrush is the best singer of the passerine family. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening hours. Thrushes sing during the entire nesting period.',
      description_rus: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
    },
    {
      id: 5,
      name_eng: 'Magpie',
      name_rus: 'Сорока',
      species: 'Pica pica',
      description_eng: 'A magpie is a very industrious bird. She builds up to eight nests, and then chooses the best of them. The entrance to the magpie`s nest always faces south, so that the dwelling will be warmer. Magpies are the only birds that recognize themselves in the mirror.',
      description_rus: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
    },
    {
      id: 6,
      name_eng: 'Eurasian jay',
      name_rus: 'Сойка',
      species: 'Garrulus glandarius',
      description_eng: 'When a jay gets excited, the tuft on its head ruffles. The bird tries to create an intimidating spectacle. Owls can imitate the voices of other birds, animals, and human-made sounds. They make large stores of acorns and nuts for the winter.',
      description_rus: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
    }
  ],
  [
    {
      id: 1,
      name_eng: 'Chaffinch',
      name_rus: 'Зяблик',
      species: 'Fringilla coelebs',
      description_eng: 'There are 450 species of finches in the wild. In winter, finches lead a gregarious lifestyle. Sometimes sparrows can be seen in their families. Finches sing in spring, with the onset of their mating season. Their singing is a rousing, minute-long roulade.',
      description_rus: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
    },
    {
      id: 2,
      name_eng: 'Claw',
      name_rus: 'Клёст',
      species: 'Loxia curvirostra',
      description_eng: 'Ticks are called "Christmas" birds. Under natural conditions, they give birth in winter, in January. These birds insulate their nests with moss and animal hairs, so the chicks are not cold. In search of cones, crossbills can fly 3500 km away from their nest.',
      description_rus: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
    },
    {
      id: 3,
      name_eng: 'Streptopelia',
      name_rus: 'Горлица',
      species: 'Streptopelia turtur',
      description_eng: 'Streptopelia inhabits mixed and broad-leaved forests, as well as urban parks and settlements. Birds often choose to live near people and easily get used to people. Streptopelia are often bred for domestic use because of their melodious, pleasant singing.',
      description_rus: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
    },
    {
      id: 4,
      name_eng: 'Woodpecker',
      name_rus: 'Дятел',
      species: 'Dendrocopos major',
      description_eng: 'The woodpecker is a conspicuous and noisy bird, often living close to humans. From mid-January to the end of June you can hear the "drumming" of woodpeckers - a trill from the vibration of branches under the rapid blows of the bird`s beak. In good weather the drumming can be heard within a radius of 1.5 km.',
      description_rus: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
    },
    {
      id: 5,
      name_eng: 'Hoopoe',
      name_rus: 'Удод',
      species: 'Upupa epops',
      description_eng: 'Hoopoe prefer to live in open landscapes with isolated trees or groves. Forest-steppe and savanna are the most convenient for the bird. Hoopoe may choose to live near humans: pastures, vineyards, orchards.',
      description_rus: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
    },
    {
      id: 6,
      name_eng: 'Swift ',
      name_rus: 'Стриж',
      species: 'Apus apus',
      description_eng: 'Swifts can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.',
      description_rus: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
    }
  ],
  [
    {
      id: 1,
      name_eng: 'Lark',
      name_rus: 'Жаворонок',
      species: 'Alauda arvensis',
      description_eng: 'Larks are migratory birds. From the beginning of September, they fly south. They come back at the beginning of March, regardless of whether snow has melted or not. The arrival of the skylarks was used to determine the arrival of spring and when it was time to plow the land.',
      description_rus: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
    },
    {
      id: 2,
      name_eng: 'Nightingale',
      name_rus: 'Соловей',
      species: 'Luscinia luscinia',
      description_eng: 'Nightingales sing from early May until the end of summer. Each nightingale song consists of 12 repetitive elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.',
      description_rus: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
    },
    {
      id: 3,
      name_eng: 'Starling',
      name_rus: 'Скворец',
      species: 'Sturnus vulgaris',
      description_eng: 'Starlings are migratory birds. The synchronized flight of large flocks of starlings is called murmuration. It is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate figures that decrease and increase in the sky.',
      description_rus: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
    },
    {
      id: 4,
      name_eng: 'Oriole',
      name_rus: 'Иволга',
      species: 'Oriolus oriolus',
      description_eng: 'The oriole`s melodious voice has been compared to the sound of a flute. It is difficult for humans to see the oriole, as it lives high up in the trees. The oriole is not only a very beautiful bird, but also a useful one. It destroys poisonous caterpillars that other birds do not eat.',
      description_rus: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
    },
    {
      id: 5,
      name_eng: 'Whistleblower',
      name_rus: 'Свиристель',
      species: 'Bombycilla garrulus',
      description_eng: 'Whistleblower has very tenacious claws, which help the bird to stay on branches and nibble on berries, which are the hardest to reach. During courtship, the male offers the female a berry or other treat. If the female accepts it, the birds create a pair.',
      description_rus: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
    },
    {
      id: 6,
      name_eng: 'Carduelis',
      name_rus: 'Щегол',
      species: 'Carduelis carduelis',
      description_eng: 'The scarves sing beautifully and melodically. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills can be distinguished in the twittering. Crested cranes get used to people and can even return to the owner after being released into the wild',
      description_rus: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
    }
  ],
  [
    {
      id: 1,
      name_eng: 'Eagle',
      name_rus: 'Орёл',
      species: 'Aquila nipalensis',
      description_eng: 'In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, with a speed of up to 240 km/h. The illusion of slow movement is due to the height of the flight - more than 700 meters',
      description_rus: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
    },
    {
      id: 2,
      name_eng: 'Kite',
      name_rus: 'Коршун',
      species: 'Milvus migrans',
      description_eng: 'Kites are large raptors, about half a meter tall and weighing up to 1 kg as adults. Their wings are narrow and long, with a wingspan of 1.5 m. Kites often nest in large flocks and even form large colonies.',
      description_rus: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
    },
    {
      id: 3,
      name_eng: 'Hen harrier',
      name_rus: 'Лунь',
      species: 'Circus cyaneus',
      description_eng: 'The harrier is a small falcon. It feeds mainly on rodents; voles, hamsters, and mice are the basis of its diet. The plumage of the harrier may be ash-gray. The comparison "gray as a harrier" is associated with such a bird.',
      description_rus: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
      image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
    },
    {
      id: 4,
      name_eng: 'Falcon',
      name_rus: 'Сокол',
      species: 'Falco peregrinus',
      description_eng: 'The Latin name Falco is derived from the word "sickle" because of the sickle shape of its wings. The long and wide wings allow the falcon to fly high into the sky and soar freely. Falcon flight speeds reach 280-320 kilometers per hour.',
      description_rus: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
    },
    {
      id: 5,
      name_eng: 'Hawk',
      name_rus: 'Ястреб',
      species: 'Accipiter gentilis',
      description_eng: 'All hawks are characterized by wide and short wings. Another distinctive feature is the white "eyebrows" above the eyes. Slavic vigilantes placed the image of a hawk on their banners as a symbol of bravery, power and ruthlessness to enemies.',
      description_rus: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
    },
    {
      id: 6,
      name_eng: 'Owl',
      name_rus: 'Филин',
      species: 'Bubo bubo',
      description_eng: 'The flight of an owl is silent and its vision is very sharp. These features make the bird a consummate night hunter. The eagle owl has no natural enemies, no animal hunts adult birds. But chicks are attacked by foxes and wolves.',
      description_rus: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
    }
  ],
  [
    {
      id: 1,
      name_eng: 'Albatross',
      name_rus: 'Альбатрос',
      species: 'Diomedea exulans',
      description_eng: 'The albatross is the largest flying bird in the world. It has a wingspan of three and a half and weighs ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances over the ocean',
      description_rus: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
    },
    {
      id: 2,
      name_eng: 'Booby',
      name_rus: 'Олуша',
      species: 'Sula nebouxii',
      description_eng: 'The peculiarity of the blue-footed booby is not only the rich bright blue color of its feet, but also the fact that they are very warm. While other species of birds warm their clutches with their bodies, the blue-footed booby does it with its paws',
      description_rus: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
    },    
    {
      id: 3,
      name_eng: 'Procellariidae',
      name_rus: 'Буревестник',
      species: 'Puffinus griseus',
      description_eng: 'The size of petrels varies. The smallest of them are up to 25 cm in length, the largest up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of the petrel in the air heralds a storm, as the name of the bird itself indicates.',
      description_rus: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
    },
    {
      id: 4,
      name_eng: 'Pelican',
      name_rus: 'Пеликан',
      species: 'Pelecanus',
      description_eng: 'Pelicans are inhabitants of seas and rivers. They walk clumsily, but they fly and swim well. They feed mainly on fish, arrange collective hunts - lining up in a semicircle they flap the water with their wings and beaks and drive frightened fish out into shallow water.',
      description_rus: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
      image: 'https://anapacity.com/Images/Pages/kudryavyj-pelikan.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
    },
    {
      id: 5,
      name_eng: 'Penguin',
      name_rus: 'Пингвин',
      species: 'Aptenodytes forsteri',
      description_eng: 'The male Emperor penguin reaches a height of 130 cm and its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin`s diet consists of fish, squid and krill. The birds hunt in the ocean in large groups.',
      description_rus: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
    },
    {
      id: 6,
      name_eng: 'Seagull',
      name_rus: 'Чайка',
      species: 'Larus argentatus',
      description_eng: 'Gulls inhabit the shores of seas, lakes, rivers, reservoirs, swamps, often nesting on islands. Since the end of the last century, seagulls began to appear in large cities, where they make nests on the roofs of buildings. All gulls lead a colonial lifestyle.',
      description_rus: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
    }
  ]
];

// export default birdsData;



/* -------------- CHANGE VIEW -------------- */

const MAIN = document.querySelector('.main');
const TO_MAIN = document.querySelectorAll('.to_main_btn');
const GALLERY = document.querySelector('.gallery');
const TO_GALLERY = document.querySelectorAll('.to_gallery_btn');
const QUIZE = document.querySelector('.quize');
const TO_QUIZE = document.querySelectorAll('.to_quize_btn');
const RESULTS = document.querySelector('.results');
const TO_RESULTS = document.querySelectorAll('.to_results_btn');

const changeView = function() {
    if (this.classList.contains('to_main_btn')) {
        MAIN.classList.remove('invisible');
        GALLERY.classList.add('invisible');
        QUIZE.classList.add('invisible');
        RESULTS.classList.add('invisible');
    }
    if (this.classList.contains('to_gallery_btn')) {
        MAIN.classList.add('invisible');
        GALLERY.classList.remove('invisible');
        QUIZE.classList.add('invisible');
        RESULTS.classList.add('invisible');
    }
    if (this.classList.contains('to_quize_btn')) {
        MAIN.classList.add('invisible');
        GALLERY.classList.add('invisible');
        QUIZE.classList.remove('invisible');
        RESULTS.classList.add('invisible');
    }
    if (this.classList.contains('to_results_btn')) {
        MAIN.classList.add('invisible');
        GALLERY.classList.add('invisible');
        QUIZE.classList.add('invisible');
        RESULTS.classList.remove('invisible');
    }
};

TO_MAIN.forEach(el => el.addEventListener('click', changeView));
TO_GALLERY.forEach(el => el.addEventListener('click', changeView));
TO_QUIZE.forEach(el => el.addEventListener('click', changeView));
TO_RESULTS.forEach(el => el.addEventListener('click', changeView));


/* -------------- CHANGE LANGUAGE -------------- */

if (localStorage.getItem('lang')) {
  if (localStorage.getItem('lang') == 'RUS') {
    languageToggle.checked = false;
  } else if (localStorage.getItem('lang') == 'ENG') {
    languageToggle.checked = true;
  } else (localStorage.setItem('lang', 'RUS'));
};

const changeLang = function() {
    const ENG = document.querySelectorAll('.eng');
    const RUS = document.querySelectorAll('.rus'); 
    if (languageToggle.checked) {
        RUS.forEach(el => {
            el.classList.add('invisible');
        });
        ENG.forEach(el => {
            el.classList.remove('invisible');
        });
        localStorage.setItem('lang', 'ENG');
    } else {
        RUS.forEach(el => {
            el.classList.remove('invisible');
        });
        ENG.forEach(el => {
            el.classList.add('invisible');
        });
        localStorage.setItem('lang', 'RUS');
    }
};
languageToggle.addEventListener('change', changeLang);
changeLang();


 /* ------ PLAYER ------ */
 
const player = function() {
  const PLAY_BTN = document.querySelector(".play_btn");
  const PAUSE_BTN = document.querySelector(".pause_btn");

  const TRECK = document.querySelector(".timebar_main");
  const MARKER = document.querySelector(".timebar_point");
  const TIME_CURRENT = document.querySelector(".current_time");
  const TIME_FULL = document.querySelector(".full_time");
  const TRECK_full = document.querySelector(".audio_timebar");

  const VOLUME = document.querySelector(".volume_rage");

  const playQuiz = function() {
    PLAY_BTN.classList.add('invisible');
    PAUSE_BTN.classList.remove('invisible');
    audioQuiz.volume = 0.5;
    audioQuiz.play();
  }

  const pauseQuiz = function() {
    PLAY_BTN.classList.remove('invisible');
    PAUSE_BTN.classList.add('invisible');
    audioQuiz.pause();
  }

  const refreshProgress = function(e) {
    const {duration, currentTime} = e.srcElement;
    if (duration >= 0 && Math.floor(duration - Math.floor(duration/60)*60) < 10) {
      TIME_FULL.innerHTML = Math.floor(duration/60) + ':0' + Math.floor(duration - Math.floor(duration/60)*60);
    } else if (duration >= 0) {
      TIME_FULL.innerHTML = Math.floor(duration/60) + ':' + Math.floor(duration - Math.floor(duration/60)*60);
    }
    if (Math.floor(currentTime - Math.floor(currentTime/60)*60) < 10) {
      TIME_CURRENT.innerHTML = Math.floor(currentTime/60) + ':0' + Math.floor(currentTime - Math.floor(currentTime/60)*60)
    } else {
      TIME_CURRENT.innerHTML = Math.floor(currentTime/60) + ':' + Math.floor(currentTime - Math.floor(currentTime/60)*60);
    }
    let treckProgress = Math.ceil(currentTime/duration * 100);
    TRECK.style.background = `linear-gradient(to right, rgb(118, 187, 28) 0%, rgb(231, 184, 56) ${treckProgress}%, rgb(115, 115, 115) ${treckProgress}%, rgb(115, 115, 115) 100%)`;
    MARKER.style.left = `${treckProgress}%`;
  }

  const setProgress = function(e) {
    const width = this.clientWidth;
    const click = e.offsetX;
    const duration = audioQuiz.duration;
    audioQuiz.currentTime = (click / width) * duration;
  }

  const changeVolume = function() {
    audioQuiz.volume = this.value;
  };

  PLAY_BTN.addEventListener('click', playQuiz);
  PAUSE_BTN.addEventListener('click', pauseQuiz);
  audioQuiz.addEventListener('timeupdate', refreshProgress);
  TRECK_full.addEventListener('click', setProgress);
  audioQuiz.addEventListener('ended', pauseQuiz);
  VOLUME.addEventListener('change', changeVolume);
}

const playerRefresh = function() {
  const PLAY_BTN = document.querySelector(".play_btn");
  const PAUSE_BTN = document.querySelector(".pause_btn");
  const TRECK = document.querySelector(".timebar_main");
  const MARKER = document.querySelector(".timebar_point");
  const TIME_CURRENT = document.querySelector(".current_time");
  const TIME_FULL = document.querySelector(".full_time");

  PLAY_BTN.classList.remove('invisible');
  PAUSE_BTN.classList.add('invisible');
  TIME_FULL.innerHTML = '0:00';
  TIME_CURRENT.innerHTML = '0:00';
  TRECK.style.background = 'rgb(115, 115, 115)';
  MARKER.style.left = '0%';
}



/* -------------- RESULTS -------------- */

const refreshResults = function() {
  const WINNERS = document.querySelector(".winners_section");
  WINNERS.innerHTML = `<tr class="winners_table_head">
                        <th>
                            <span class="eng">Number</span>
                            <span class="rus">Номер</span>
                        </td>
                        <th>
                            <span class="eng">Name</span>
                            <span class="rus">Имя</span>
                        </td>
                        <th>
                            <span class="eng">Score</span>
                            <span class="rus">Счет</span>
                        </td>
                      </tr>`;
  let keys = Object.keys(localStorage);
  keys.sort((a, b) => a - b);
  for (let key of keys) {
    if (key != 'lang') {
      const WIN_HTML = document.createElement('tr');
      WIN_HTML.className = 'winner_row';
      WIN_HTML.innerHTML = `
                              <td>${key - 1}</td>
                              <td>${localStorage.getItem(key).slice(0, localStorage.getItem(key).indexOf(/[,]+/) - 3)}</td>
                              <td>${localStorage.getItem(key).slice(localStorage.getItem(key).indexOf(/[,]+/) - 1)}</td>
                          `;
      document.querySelector('.winners_section').append(WIN_HTML);
    }
  }
  clearStorage.addEventListener('click', () => {
      localStorage.clear();
      refreshResults();
  });
  changeLang();
};

refreshResults();


/* -------------- QUIZE -------------- */

let score = 0;
let tryScore = 0;
let rigthYes = false;
let level = 0;

const refreshScore = function() {
    const SCORE_COUNT = document.querySelector('.score_count');
    SCORE_COUNT.innerHTML = score;
}

const refreshLevel = function() {
    const LEVEL_BIRDS = document.querySelectorAll('.level_item');
    LEVEL_BIRDS.forEach(el => el.classList.remove('level_item_active'));
    LEVEL_BIRDS[level].classList.add('level_item_active');
}

let currentBirds = [...birdsData[level].sort(function() {
    return 0.5 - Math.random();
})];
let correct = Math.floor(Math.random() * 6);

const QUESTION_NAME_eng = document.querySelector('.question_name_eng');
const QUESTION_NAME_rus = document.querySelector('.question_name_rus');
const ANSWER_PIC = document.querySelector('.answer_picture_img');
const ANSWER_NAME_eng = document.querySelector('.answer_name_eng');
const ANSWER_NAME_rus = document.querySelector('.answer_name_rus');
const ANSWER_SPECIES = document.querySelector('.answer_species');
const ANSWER_AUDIO = document.querySelector('.answer_audio');
const ANSWER_DESCRIPTION_eng = document.querySelector('.answer_description_eng');
const ANSWER_DESCRIPTION_rus = document.querySelector('.answer_description_rus');
const QUESTION_AUDIO = document.querySelector('.quize_audio');
const ANSWER_OPTION_eng = document.querySelectorAll(".answer_option_eng");
const ANSWER_OPTION_rus = document.querySelectorAll(".answer_option_rus");
const ANSWER_ITEM = document.querySelectorAll(".answers_item");

const defaultDescription = function() {
    birdPicture.src = `./assets/bird_any/level${level+1}.png`;
    QUESTION_NAME_eng.innerHTML = '? ? ?';
    QUESTION_NAME_rus.innerHTML = '? ? ?';
    ANSWER_PIC.src = "";
    ANSWER_NAME_eng.innerHTML = "Listen to the player. Select bird from list";
    ANSWER_NAME_rus.innerHTML = "Послушайте плеер. Выберите вариант ответа";
    ANSWER_SPECIES.innerHTML = "";
    ANSWER_AUDIO.classList.add('invisible');
    ANSWER_DESCRIPTION_eng.innerHTML = "";
    ANSWER_DESCRIPTION_rus.innerHTML = "";
    playerRefresh();
}

const showBirdAny = function(count) {
    ANSWER_PIC.src = currentBirds[count].image;
    ANSWER_NAME_eng.innerHTML = currentBirds[count].name_eng;
    ANSWER_NAME_rus.innerHTML = currentBirds[count].name_rus;
    ANSWER_SPECIES.innerHTML = currentBirds[count].species;
    ANSWER_AUDIO.src = currentBirds[count].audio;
    ANSWER_AUDIO.classList.remove('invisible');
    ANSWER_DESCRIPTION_eng.innerHTML = currentBirds[count].description_eng;
    ANSWER_DESCRIPTION_rus.innerHTML = currentBirds[count].description_rus;
};

const showBirdCorrect = function(count) {
    birdPicture.src = currentBirds[count].image;
    birdPicture.alt = currentBirds[count].name_eng;
    QUESTION_NAME_eng.innerHTML = currentBirds[count].name_eng;
    QUESTION_NAME_rus.innerHTML = currentBirds[count].name_rus;
};

const wrongAudio = new Audio("./assets/wrong.mp3");
const correctAudio = new Audio("./assets/correct.mp3");

const NEXT_BTN = document.querySelector('.next_question');

NEXT_BTN.addEventListener('click', () => {
    level++;
    tryScore = 0;
    currentBirds = [...birdsData[level].sort(function() {
        return 0.5 - Math.random();
    })];
    correct = Math.floor(Math.random() * 6);
    startQuestion();
});

const saveGame = function() {
    const GAMER_INPUT = document.querySelector('.gamer_input');
    localStorage.setItem(localStorage.length + 1, `${GAMER_INPUT.value}, ${score}`);
    saveResult.disabled = true;
    refreshResults();
}

closeModal.addEventListener('click', () => myModal.classList.add('invisible'));

const startNewGame = function() {
  const START_GAME = document.querySelector(".start_new_game");
  level = 0;
  score = 0;
  tryScore = 0;
  rigthYes = false;
  currentBirds = [...birdsData[level].sort(function() {
      return 0.5 - Math.random();
  })];
  correct = Math.floor(Math.random() * 6);
  startQuestion();
  myModal.classList.add('invisible');
  START_GAME.classList.add('invisible');
}

const showModal = function() {
    const SCORE_FIELD = document.querySelector('.win_score');
    SCORE_FIELD.innerHTML = score;
    myModal.classList.remove('invisible');
    const NEW_GAME_MODAL = document.querySelector('.new_game');
    NEW_GAME_MODAL.addEventListener('click', startNewGame);
    saveResult.addEventListener('click', saveGame);
    saveResult.disabled = false;
};

const activateNewGame = function() {
  const START_GAME = document.querySelector(".start_new_game");
  START_GAME.classList.remove('invisible');
  START_GAME.addEventListener('click', startNewGame);
};
                

const isCorrect = function() {
    if (ANSWER_ITEM[correct] == this) {
        if (!rigthYes) {
            this.classList.add('correct_answer');
            audioQuiz.pause();
            correctAudio.play();
            score += 5 - tryScore;
            rigthYes = true;
            if (level == 5) {
                showModal();
                activateNewGame();
            } else {
                NEXT_BTN.disabled = false;
            }
        };
        showBirdAny([...this.parentNode.children].indexOf(this));
        showBirdCorrect([...this.parentNode.children].indexOf(this));
    } else {
        showBirdAny([...this.parentNode.children].indexOf(this));
        if (!rigthYes && !(this.classList.contains('wrong_answer'))) {
            this.classList.add('wrong_answer');
            tryScore++;
            wrongAudio.currentTime = 0;
            wrongAudio.play();
        };
    }
    refreshScore();
};

const startQuestion = function() {
    refreshScore();
    refreshLevel();
    defaultDescription();
    rigthYes = false;
    QUESTION_AUDIO.src = currentBirds[correct].audio;
    ANSWER_OPTION_eng.forEach((el, count) => el.innerHTML = currentBirds[count].name_eng);
    ANSWER_OPTION_rus.forEach((el, count) => el.innerHTML = currentBirds[count].name_rus);
    ANSWER_ITEM.forEach(el => el.addEventListener('click', isCorrect));
    NEXT_BTN.disabled = true;
    const ANS_BTN = document.querySelectorAll('.answers_item');
    ANS_BTN.forEach(el => el.classList = 'answers_item');
    player();
};

startQuestion();

/* -------------- GALLERY -------------- */

const fillGallery = function() {
    const CURRENT_PAGE = document.querySelector('.gallery_item_active');
    let index = [...CURRENT_PAGE.parentNode.children].indexOf(CURRENT_PAGE);
    for (let i = 0; i < 6; i++) {
        GALLERY.insertAdjacentHTML('beforeend', `
        <div class="bird_gallery">
            <div class="bird_picture">
                <img class="bird_picture_img" src=${birdsData[index][i].image} alt=${birdsData[index][i].name_eng}>
            </div>
            <div>
                <div class="answer_bird_description">
                    <div>
                        <div class="bird_name eng">${birdsData[index][i].name_eng}</div>
                        <div class="bird_name rus">${birdsData[index][i].name_rus}</div>
                        <div class="bird_species">${birdsData[index][i].species}</div>
                    </div>
                    <figure>
                        <audio class="bird_audio"
                            controls
                            src=${birdsData[index][i].audio}>
                                <a href=${birdsData[index][i].audio}>
                                    Download audio
                                </a>
                        </audio>
                    </figure>
                </div>
                <div class="bird_description bird_description_eng eng">${birdsData[index][i].description_eng}</div>
                <div class="bird_description bird_description_rus rus">${birdsData[index][i].description_rus}</div>
            </div>
        </div>`);
    }
    changeLang();
};

fillGallery();

const GALLERY_BIRDS = document.querySelectorAll('.gallery_level_item');

const changeGalleryWiew = function() {
    GALLERY_BIRDS.forEach(el => el.classList.remove('gallery_item_active'));
    GALLERY_BIRDS[[...this.parentNode.children].indexOf(this)].classList.add('gallery_item_active');
    const BIRDS_TO_DELETE = document.querySelectorAll('.bird_gallery');
    BIRDS_TO_DELETE.forEach(el => el.remove());
    fillGallery();
};

GALLERY_BIRDS.forEach(el => el.addEventListener('click', changeGalleryWiew));


 /* ------ burger ------ */

const BURGER = document.querySelector(".burger");
const NAVIGATION_LIST = document.querySelector(".nav");
const NAVIGATION_LINK = document.querySelectorAll(".header_btn");

const closeMenu = () => {
  BURGER.classList.remove("open");
  NAVIGATION_LIST.classList.remove("open");
}
     
const openMenu = () => {
  BURGER.classList.toggle("open");
  NAVIGATION_LIST.classList.toggle("open");
  NAVIGATION_LINK.forEach(item => item.addEventListener("click", closeMenu));
  window.addEventListener("click", function(event) {
    if (event.target != NAVIGATION_LIST && event.target != burgerIMG) closeMenu()});
};
     
BURGER.addEventListener("click", openMenu);
 



