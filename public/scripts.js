var GLOBAL_ID;

var articleModel = (function() {
	var articles = [{
		id: "1",
		title: "Министр внутренних дел рассказал, что центры для незаконных мигрантов будут созданы в Витебске, Гомеле и Лиде",
		summary: "В интервью корреспонденту БЕЛТА министр внутренних дел Игорь Шуневич коснулся вопросов незаконной миграции.",
		createdAt: new Date("2017-02-05T19:23:00"),
		author: "Сахарчук Станислав",
		content: "В интервью корреспонденту БЕЛТА министр внутренних дел Игорь Шуневич коснулся вопросов незаконной миграции. Говоря о реальной цели въезда в Беларусь большинства «пропавших» студентов из Бангладеш, чиновник указал последующую миграцию в Евросоюз.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "2",
		title: "Загадка одной видеопленки. Репортаж по следам любительского ролика с мест ДТП 45-летней давности",
		summary: "Круглую железную коробку нашли в гараже — в одном из сотен тысяч, построенных в республике под названием БССР.",
		createdAt: new Date("2017-02-10T19:50:00"),
		author: "Осведомитель",
		content: "Круглую железную коробку нашли в гараже — в одном из сотен тысяч, построенных в республике под названием БССР. Рельефная надпись «Свема» (светочувствительные материалы) выдавала ее назначение. Конечно, пленка! На первых прямоугольниках-кадрах на просвет виднелась надпись «Фильм создан любительской киностудией при ГАИ», далее — снимки с мест ДТП. О чем же рассказывает эта пленка?",
		tags: ["находки", "репортаж"]
	}, {
		id: "3",
		title: "Китайская Oppo выпустит смартфон с 5-кратным оптическим зумом",
		summary: "Китайская компания Oppo анонсировала на MWC 2017 технологию для мобильных камер, позволяющую реализовать в смартфонах фотомодуль с 5-кратным оптическим зумом.",
		createdAt: new Date("2017-02-11T19:40:00"),
		author: "Око",
		content: "Китайская компания Oppo анонсировала на MWC 2017 технологию для мобильных камер, позволяющую реализовать в смартфонах фотомодуль с 5-кратным оптическим зумом. Как утверждают в Oppo, приближение не скажется на качестве изображения, которое сохранит все свои характеристики.",
		tags: ["смартфоны", "техника"]
	}, {
		id: "4",
		title: "Автомобилист: причины многих ДТП — ограничения скорости",
		summary: "Пользователь форума Onliner.by уверен, что многие ДТП происходят из-за ограничений скорости.",
		createdAt: new Date("2017-02-07T15:23:00"),
		author: "Сахарчук Станислав",
		content: "Пользователь форума Onliner.by уверен, что многие ДТП происходят из-за ограничений скорости. «Ограничения скорости — это вообще бред и абсурд… Их следует убрать вообще из ПДД», — считает он. По словам автомобилиста, если бы скорость передвижения транспорта на дорогах не ограничивалась, то водители всегда были бы внимательнее и «ДТП не было бы вообще!»",
		tags: ["дтп", "автомобили"]
	}, {
		id: "5",
		title: "Пациент: все хотят выучиться на врача, а потом почему-то жалуются на низкую зарплату",
		summary: "«Желающих выучиться на врача пруд пруди. Они что, не представляют, куда идут и на что подписываются?",
		createdAt: new Date("2017-02-20T09:25:00"),
		author: "Почемучка",
		content: "«Желающих выучиться на врача пруд пруди. Они что, не представляют, куда идут и на что подписываются? Или у них в мечтах только чистенький белый халатик, личный кабинетик, медсестра под боком и улыбающийся пациент? Они рассчитывали со студенческой скамьи на почет и лавры седовласого профессора, а оказалось, что нужно пахать», — прокомментировала пользовательница форума Onliner.by жалобы некоторых врачей.",
		tags: ["врачи", "обучение"]
	}, {
		id: "6",
		title: "Предприниматели выбрали лучший регион для ведения бизнеса. На первом месте — Минск, на последнем — Могилевская область",
		summary: "Исследования «Лучший регион Беларуси для ведения бизнеса индивидуальными предпринимателями» РОО «Перспектива» проводит с 2009 года",
		createdAt: new Date("2017-02-19T12:45:00"),
		author: "Анонимус",
		content: "Исследования «Лучший регион Беларуси для ведения бизнеса индивидуальными предпринимателями» РОО «Перспектива» проводит с 2009 года, собирая статистику и проводя анкетирование представителей малого бизнеса.",
		tags: ["бизнес", "исследования"]
	}, {
		id: "7",
		title: "Нетрезвый отец на Mazda с детьми в салоне сбил женщину с ребенком на руках",
		summary: "33-летний гродненец вечером пил у себя дома пиво, — кратко описали обстоятельства происшествия в ГАИ Гродненской области.",
		createdAt: new Date("2017-02-17T09:20:00"),
		author: "Всезнайка",
		content: "33-летний гродненец вечером пил у себя дома пиво, — кратко описали обстоятельства происшествия в ГАИ Гродненской области. — А следующим утром повез на Mazda детей в детсад. Автомобиль двигался в правой полосе». Когда на пешеходный переход вышла женщина с ребенком, он не успел среагировать.",
		tags: ["происшествия", "дтп"]
	}, {
		id: "8",
		title: "Поставь доктору оценку. Белорусский стартап запустил сервис записи к врачам",
		summary: "Белорусский стартап 2doc.by предложил запись на прием в несколько кликов — без звонков в медцентры и разглашения цели визита при посещении «неудобных» специалистов.",
		createdAt: new Date("2017-02-02T23:23:00"),
		author: "Разумист",
		content: "Попасть к нужному врачу бывает непросто: то сам доктор заболел, то не принимает сегодня, то уехал на конференцию. А идти к незнакомому специалисту не всегда хочется. Белорусский стартап 2doc.by предложил запись на прием в несколько кликов — без звонков в медцентры и разглашения цели визита при посещении «неудобных» специалистов.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "9",
		title: "Затерянный мир: как и чем живут на самом отдаленном от цивилизации острове планеты",
		summary: "Как и чем живет затерянный под ревущими ветрами город, почти все обитатели которого приходятся друг другу родственниками",
		createdAt: new Date("2017-02-01T19:05:10"),
		author: "Осведомитель",
		content: "Представьте себе, что живете вы в деревне на 250 душ, под домом действующий вулкан, из хозяйства — поле с картошкой, корова да несколько овец, а до ближайшего очага человеческой цивилизации немыслимые две тысячи километров и пять дней ходу на сейнере по бурному океану. Как и чем живет затерянный под ревущими ветрами город, почти все обитатели которого приходятся друг другу родственниками, в обзоре Onliner.by.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "10",
		title: "В Минске заработало приложение, которое позволяет определить качество воды в доме",
		summary: "«Минскводоканал» запустил приложение, которое позволяет определить качество водопроводной воды в любом из домов Минска.",
		createdAt: new Date("2017-02-05T12:24:12"),
		author: "Всезнайка",
		content: "«Минскводоканал» запустил приложение, которое позволяет определить качество водопроводной воды в любом из домов Минска. Для этого нужно ввести свой адрес, после чего на экране появится таблица с основными показателями. Значения показателей обновляются ежемесячно, а в случае необходимости, вызванной техническими переключениями, изменением зон влияния в течение периода, — чаще.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "11",
		title: "10 интересных фактов из истории космонавтики, о которых вы не знали",
		summary: "Космонавт — одна из самых опасных профессий, доступных современному человеку.",
		createdAt: new Date("2017-05-02T19:23:00"),
		author: "Сахарчук Станислав",
		content: "Космонавт — одна из самых опасных профессий, доступных современному человеку. Но в абсолютных цифрах она таковой не выглядит: за 56 лет истории пилотируемой космонавтики и после более чем 500 полетов на низкую орбиту и к Луне известно всего 5 инцидентов, которые закончились жертвами. Такие цифры — результат того, что космонавтика также является одной из самых серьезных профессий, где свято чтут технику безопасности и понимают значение огромного количества предварительных проверок.\nКосмонавты учатся крайне долго, и совсем не факт, что вы когда-нибудь все же полетите в космос, а не останетесь на Земле в качестве инструктора или сотрудника ЦУП. Но то, что от работы космонавтов в некоторой степени зависит будущее человеческого вида и наша судьба в космосе, не значит, что и они не могут немного повеселиться. После небольшого исследования мы собрали забавные ситуации и истории о некоторых космических миссиях. В следующий раз, вглядываясь в звезды и удивляясь бесконечности возможностей космоса, разрешите себе немного посмеяться над этими интересными и иногда забавными моментами на пути к космическому просветлению человечества.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "12",
		title: "Самые ожидаемые игры весны 2017 года",
		summary: "Весной скучно не будет: многие предвкушают встречу с новыми героями Mass Effect: Andromeda, кто-то хочет погонять в FlatOut 4: Total Insanity или пострелять в Tom Clancy’s Ghost Recon Wildlands. Но обо всем по порядку.",
		createdAt: new Date("2017-03-03T10:00:00"),
		author: "Геймер",
		content: "Прошедшей зимой вышло не так уж много действительно интересных и громких проектов. Некоторые из игр вызвали разочарование, другие в целом оправдали ожидания. The Last Guardian оказалась неплохим приключением (хоть и скучным) и привлекла к себе внимание, кроме прочего, тем, что в разработке она находилась долгие девять лет. Resident Evil 7: Biohazard восприняли кто как: некоторым страшилка показалась неканоничной, другим — свежей и интересной.\nFor Honor выглядит неоднозначной и уж точно не хитовой, хотя своя армия поклонников, как и у любой другой игры, у нее есть. А еще вышли Horizon Zero Dawn, Halo Wars 2, Dead Rising 4 и множество других. Весной скучно не будет: многие предвкушают встречу с новыми героями Mass Effect: Andromeda, кто-то хочет погонять в FlatOut 4: Total Insanity или пострелять в Tom Clancy’s Ghost Recon Wildlands. Но обо всем по порядку.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "13",
		title: "В преддверии нового сезона. Воспоминания о евротрипе верхом на мотоцикле",
		summary: "Минчанка Ирина задалась целью проехать немалое расстояние на Honda Shadow Sabre 1100СС для получения «звания» Iron Butt. ",
		createdAt: new Date("2017-02-28T15:25:00"),
		author: "Путешественник",
		content: "Минчанка Ирина задалась целью проехать немалое расстояние на Honda Shadow Sabre 1100СС для получения «звания» Iron Butt. Девушка проложила маршрут (Минск — Брест — Варшава — Берлин — Прага — Кутна-Гора), но, когда отправилась в путешествие, поняла: просто так проехать эти красоты невозможно — даже ради завоевания престижного среди мотоциклистов титула.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "14",
		title: "В Гомеле в результате ДТП перевернулся милицейский микроавтобус",
		summary: "Авария случилась вчера около двух часов дня.",
		createdAt: new Date("2017-03-02T16:20:00"),
		author: "Водитель",
		content: "Авария случилась вчера около двух часов дня. Как рассказал нам пользователь форума с ником heineken81, в ДТП участвовали автомобили Nissan Primera и милицейский микроавтобус «Соболь». В результате столкновения «Соболь» опрокинулся набок.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "15",
		title: "«Только попробуй на море кольцо сними!» Психолог о мифах о женитьбе, которые живут в нашей голове",
		summary: "Зачем жениться, если можно просто жить вместе? И зачем устраивать свадьбу и приглашать дядю из Сыктывкара, когда можно обойтись росписью без свидетелей?",
		createdAt: new Date("2017-03-01T22:22:00"),
		author: "Дядя Стёпа",
		content: "Стоит признать, что с каждым десятилетием мы все свободнее относимся к официальным церемониям. Зачем жениться, если можно просто жить вместе? И зачем устраивать свадьбу и приглашать дядю из Сыктывкара, когда можно обойтись росписью без свидетелей? Что руководит нашим выбором, когда дело касается женитьбы, и какие мифы об этом прочно живут в головах белорусов? Onliner.by задал эти вопросы семейному психологу, гештальттерапевту Виктории Величко.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "16",
		title: "На платформе станции метро «Институт культуры» умер мужчина",
		summary: "Происшествие случилось сегодня около десяти утра. Как рассказал нам пресс-секретарь метрополитена Андрей Кузьмин, плохо стало минчанину 1950 года рождения. Прибыла бригада скорой.",
		createdAt: new Date("2017-05-02T12:40:00"),
		author: "Осведомитель",
		content: "Происшествие случилось сегодня около десяти утра. Как рассказал нам пресс-секретарь метрополитена Андрей Кузьмин, плохо стало минчанину 1950 года рождения. Прибыла бригада скорой.Реанимационные меры принимались на протяжении получаса, после чего врачи вынуждены были констатировать смерть. Предварительный диагноз — внезапная остановка сердца. На распорядок движения поездов инцидент не повлиял.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "17",
		title: "Мнение: новая Nokia — это чистая китайщина, только дорогая",
		summary: "Пользователи форума Onliner.by обсуждают новые телефоны под брендом Nokia.",
		createdAt: new Date("2017-02-26T12:00:00"),
		author: "Техник-Электрик",
		content: "Пользователи форума Onliner.by обсуждают новые телефоны под брендом Nokia. Судя по всему, читателей новинки не удивили. «Новая Nokia — это чистая китайщина, которая продается втридорога», — пишут форумчане и вспоминают модели Lumia, у которых была индивидуальность",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "18",
		title: "Sony Xperia XZ Premium признали лучшим из новых смартфонов MWC 2017",
		summary: "Японская Sony отправляется домой из Барселоны с одной из самых громких наград MWC 2017 — призом за самый лучший из новопредставленных смартфонов.",
		createdAt: new Date("2017-03-04T19:55:00"),
		author: "Техник-Электрик",
		content: "Японская Sony отправляется домой из Барселоны с одной из самых громких наград MWC 2017 — призом за самый лучший из новопредставленных смартфонов. Что именно привело в восторг экспертов: не меняющийся дизайн или очередной 4K-экран от Sony? Скорее всего, Sony победила в отсутствие более-менее вменяемой конкуренции на нынешней выставке.\nXperia XZ Premium получил 5,5-дюймовый экран с разрешением 3840×2160 пикселей. Смартфон оборудован процессором Snapdragon 835. Это новинка, а потому раньше поздней весны ожидать на рынке смартфон от Sony не стоит.Samsung, которая на выставке продемонстрировала только планшеты, по итогам MWC удостоилась награды за самый лучший смартфон 2016 года. Им назвали Galaxy S7 edge.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "19",
		title: "Отец литий-ионной батареи создал новый прорывной аккумулятор",
		summary: "Физик Джон Гуденаф, который в свое время стал создателем литий-ионных батарей, заявил об открытии новой прорывной технологии, пишет Fossbytes. Она позволит в три раза увеличить емкость аккумуляторов, повысить количество циклов зарядки.",
		createdAt: new Date("2017-03-05T10:20:00"),
		author: "Техник-Электрик",
		content: "Физик Джон Гуденаф, который в свое время стал создателем литий-ионных батарей, заявил об открытии новой прорывной технологии, пишет Fossbytes. Она позволит в три раза увеличить емкость аккумуляторов, повысить количество циклов зарядки. Базирующаяся на стеклянном электролите твердотельная батарея поддерживает быструю зарядку и не склонна к возгоранию.\nГуденаф удостоен Нобелевской премии за создание литий-ионной батареи. Сегодня ученому уже 94 года, однако он не потерял ясности ума и готов удивлять мир. Исследовательская команда под его руководством разработала твердотельную батарею, в которой используется стеклянный твердый электролит вместо жидкого в стандартных батареях.\nВ качестве анода используется щелочной металл, который увеличивает емкость батареи и предотвращает образование дендритов. Эти металлические нити являются большой проблемой литий-ионных батарей, так как снижают эффективность их работы и могут привести к короткому замыканию.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "20",
		title: "Таможенники изъяли партию итальянской мебели стоимостью $92 тысячи",
		summary: "40 предметов дорогостоящей итальянской мебели изъяли витебские таможенники. По документам стоимость товара была многократно занижена для уклонения от уплаты таможенных платежей.",
		createdAt: new Date("2017-02-20T20:34:00"),
		author: "Осведомитель",
		content: "«Транспортное средство, в котором ввозился товар из Латвийской Республики на территорию ЕАЭС, следовало через пункт пропуска „Григоровщина“, — сообщает пресс-служба ГТК. — Для оформления предметов мебели были представлены документы, в соответствии с которыми стоимость товара составляла 1,3 тыс. долларов США. Однако таможенники при проведении проверки установили, что реальная стоимость товара — около 92 тыс. долларов США».",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "21",
		title: "«Мы даже хуже бомжей». Белоруска, прожившая в общежитии 25 лет, осталась с двумя дочерьми на улице без «прописки»",
		summary: "Ольге Снапковой, несмотря на обладание полезными навыками маляра-штукатура и сотни сделанных за жизнь ремонтов, приводить в порядок стены в собственной квартире так и не довелось: не обзавелась женщина за двадцать с лишним лет дорогостоящими минскими «квадратами».",
		createdAt: new Date("2017-05-02T14:20:00"),
		author: "Осведомитель",
		content: "Ольге Снапковой, несмотря на обладание полезными навыками маляра-штукатура и сотни сделанных за жизнь ремонтов, приводить в порядок стены в собственной квартире так и не довелось: не обзавелась женщина за двадцать с лишним лет дорогостоящими минскими «квадратами». Однако было у нее и утешение — две комнаты в общежитии коридорного типа: не шикарно, но жить можно. Устоявшийся за годы порядок существования в казенных стенах казался Ольге извечным и нерушимым, тем более что и предпосылок для изменений вроде как не было. Но прошлой осенью женщина получила извещение о выселении, а вслед за этим проиграла все суды, хотя до того была свято уверена: после десяти лет работы в строительной организации и проживания в общежитии выгнать на улицу ее не могут.",
		tags: ["мигранты", "проблемы"]
	}, {
		id: "22",
		title: "«Дом с растяжкой» на проспекте Независимости включили в план капремонта без надстройки мансардных этажей",
		summary: "Трехэтажный дом №109 на проспекте Независимости, жильцы которого на протяжении нескольких лет вели борьбу против надстройки мансардных этажей, включен в план капитального ремонта на 2017 год.",
		createdAt: new Date("2017-02-19T09:25:20"),
		author: "Неизвестный",
		content: "Трехэтажный дом №109 на проспекте Независимости, жильцы которого на протяжении нескольких лет вели борьбу против надстройки мансардных этажей, включен в план капитального ремонта на 2017 год. При этом модернизация будет проведена без увеличения этажности здания. Об этом сообщается в пресс-релизе оргкомитета общественного объединения «Экоград». Решение отказаться от надстройки Минстройархитектуры объясняет необходимостью сохранения уникальной исторической застройки.",
		tags: ["мигранты", "проблемы"]
	}];

	GLOBAL_ID = articles.length;

	function getArticles(skip, top, filterConfig) {

		skip = skip || 0;
		top = top || 10;

		var sortedArticles = [];
		articles.sort(DateSort);

		if (filterConfig == null) {
			sortedArticles = articles.slice(skip, skip + top);
			return sortedArticles;
		}

		filterConfig.tags = filterConfig.tags || [];
		filterConfig.author = filterConfig.author || "";
		filterConfig.timeBot = filterConfig.timeBot || new Date("1900-01-01T10:00:00");
		filterConfig.timeTop = filterConfig.timeTop || new Date();

		for (var i = 0; i < articles.length; i++) {
			//фильтр одновременно по дате автору и тегам
			if (compareDate(articles[i].createdAt, filterConfig.timeBot, filterConfig.timeTop) &&
				compareAuthors(articles[i].author, filterConfig.author) &&
				tagModel.containTags(articles[i].tags, filterConfig.tags)) {
				sortedArticles.push(articles[i]);
			}
		}

		sortedArticles = sortedArticles.slice(skip, skip + top);

		return sortedArticles;
	}

	function getArticle(yourId) {
		for (var i = 0; i < articles.length; i++) {
			if (articles[i].id == yourId) {
				return articles[i];
			}
		}
		return null;
	}

	function validateArticle(article) {
		if (article.id != undefined &&
			article.title.length > 0 && article.title.length < 100 &&
			article.summary.length > 0 && article.summary.length < 200 &&
			article.createdAt != undefined &&
			article.author.length > 0 &&
			article.content.length > 0 &&
			tagModel.validateTags(article.tags) && article.tags.length > 0) {
			return true;
		} else {
			return false;
		}
	}

	function addArticle(newArticle) {
		newArticle.id = GLOBAL_ID++;
		if (validateArticle(newArticle)) {
			articles.push(newArticle);

			takeToStorage();
			return true;
		} else {
			return false;
		}
	}

	function editArticle(id, newArticle) {
		var oldArticle = getArticle(id);
		newArticle.id = oldArticle.id;
		newArticle.createdAt = oldArticle.createdAt;
		newArticle.author = oldArticle.author;
		if (validateArticle(newArticle)) {
			oldArticle.title = newArticle.title;
			oldArticle.summary = newArticle.summary;
			oldArticle.content = newArticle.content;
			oldArticle.tags = newArticle.tags;

			takeToStorage();
			return true;
		} else {
			return false;
		}
	}

	function removeArticle(idToDelete) {
		for (var i = 0; i < articles.length; i++) {
			if (articles[i].id == idToDelete) {
				articles.splice(i, 1);

				takeToStorage();
				return true;
			}
		}
		return false;
	}

	function compareDate(articleDate, DateBot, DateTop) {
		if (articleDate.getTime() > DateBot.getTime()) {
			if (articleDate.getTime() < DateTop.getTime()) {
				return true;
			}
		} else {
			return false;
		}
	}

	function DateSort(article1, article2) {
		if (article1.createdAt.getTime() > article2.createdAt.getTime()) {
			return -1;
		} else if (article1.createdAt.getTime() < article2.createdAt.getTime()) {
			return 1;
		} else {
			return 0;
		}
	}

	function compareAuthors(author1, author2) {
		if (author2 == "" || author2.toLowerCase() == author1.toLowerCase()) {
			return true;
		} else {
			return false;
		}
	}

	function takeToStorage() {
		var articlesString = JSON.stringify(articles);
		localStorage.setItem("articles", articlesString);
	}

	function getFromStorage() {
		articles = JSON.parse(localStorage.getItem("articles"));
		articles.forEach(function(artcl) {
			artcl.createdAt = new Date(artcl.createdAt);
		});
	}

	return {
		getArticles: getArticles,
		addArticle: addArticle,
		editArticle: editArticle,
		removeArticle: removeArticle,
		getArticle: getArticle,
		takeToStorage: takeToStorage,
		getFromStorage: getFromStorage
	};
}())

var tagModel = (function() {
	var tags = [
		"автомобили", "недвижимость", "проблемы", "наука", "интересное",
		"дтп", "здоровье", "алкоголь", "бизнес", "мигранты", "смартфоны",
		"врачи", "обучение", "исследования", "происшествия"
	];

	function getTags() {
		return tags;
	}

	function addTag(newTag) {
		if (tags.indexOf(newTag.toLowerCase()) < 0) {
			tags.push(newTag.toLowerCase());
			return true;
		} else {
			return false;
		}
	}

	function removeTag(tagToDelete) {
		for (var i = 0; i < tags.length; i++) {
			if (tags[i] == tagToDelete.toLowerCase()) {
				tags.splice(i, 1);
			}
		}
	}

	function containTags(tagsContainer, tagsContainable) {
		if (tagsContainable.length == 0) {
			return true;
		}
		for (var g = 0; g < tagsContainable.length; g++) {
			if (tagsContainer.indexOf(tagsContainable[g].toLowerCase()) < 0) {
				return false;
			}
		}
		return true;
	}

	function validateTags(tagsToValidate) {
		for (var i = 0; i < tagsToValidate.length; i++) {
			if (tags.indexOf(tagsToValidate[i]) < 0) {
				return false;
			}
		}
		return true;
	}
	return {
		getTags: getTags,
		addTag: addTag,
		removeTag: removeTag,
		validateTags: validateTags,
		containTags: containTags
	};
}())

var articleRenderer = (function() {
	var ARTICLE_TEMPLATE;
	var ARTICLE_PLACE;
	var FULL_ARTICLE_PLACE;
	var articleListNode;
	var userField;

	function init() {
		ARTICLE_TEMPLATE = document.querySelector("#template-article");
		ARTICLE_PLACE = document.querySelector(".news-column");
		FULL_ARTICLE_PLACE = document.querySelector(".news");

		articleListNode = document.querySelector('.news');
		articleListNode.addEventListener('click', handleBtnClick);

		userField = articleListNode = document.querySelector('.userField');
		userField.addEventListener('click', userBtnClick);
	}

	function renderArticles(articles) {
		return articles.map(function(article) {
			return renderArticle(article);
		});
	}

	function removeArticlesFromDom() {
		ARTICLE_PLACE.innerHTML = "";
	}

	function renderArticle(article) {
		var template = ARTICLE_TEMPLATE;
		template.content.querySelector(".news-article").dataset.id = article.id;
		template.content.querySelector(".news-article-body-title").textContent = article.title;
		template.content.querySelector(".news-article-body-summary").textContent = article.summary;
		template.content.querySelector(".news-article-info-author").textContent = article.author;
		template.content.querySelector(".news-article-info-data").textContent = formatDate(article.createdAt);
		var tags = template.content.querySelector(".news-article-info-tags");
		tags.innerHTML = "";

		for (var i = 0; i < article.tags.length; i++) {
			var tag = document.createElement("font");
			tag.innerHTML = "<font class='news-article-tag'>" + article.tags[i] + "</font>";
			tags.appendChild(tag);
		}

		return template.content.querySelector(".news-article").cloneNode(true);
	}

	function formatDate(date) {
		var day = date.getDate();
		var month = date.getMonth() + 1;
		if (day < 10) {
			day = "0" + day;
		}
		if (month < 10) {
			month = "0" + month;
		}
		return day + '.' + (month) + '.' + date.getFullYear() + ' ' +
			date.getHours() + ':' + date.getMinutes();
	}

	function insertArticlesInDOM(articles) {
		var articlesNodes = renderArticles(articles);

		if (userRenderer.getUserName() == null) {
			var elems = document.getElementsByClassName("article-actions");
			for (var i = 0; i < elems.length; i++) {
				elems[i].style.display = "none";
			}
		} else {
			var elems = document.getElementsByClassName("article-actions");
			for (var i = 0; i < elems.length; i++) {
				elems[i].style.display = "";
			}
		}

		articlesNodes.forEach(function(node) {
			ARTICLE_PLACE.appendChild(node);
		});
	}

	function removeArticleFromDOM(id) {
		for (var i = 0; i < ARTICLE_PLACE.childNodes.length; i++) {
			if (ARTICLE_PLACE.childNodes[i].dataset.id == id) {
				ARTICLE_PLACE.removeChild(ARTICLE_PLACE.childNodes[i]);
			}
		}
	}

	function insertArticleInDOM(article) {
		var newArticleNode = renderArticle(article);
		ARTICLE_PLACE.appendChild(newArticleNode);
	}

	function editArticleInDOM(id, newArticle) {
		for (var i = 0; i < ARTICLE_PLACE.childNodes.length; i++) {
			if (ARTICLE_PLACE.childNodes[i].dataset.id == id) {
				var newArticleNode = renderArticle(newArticle)
				ARTICLE_PLACE.replaceChild(newArticleNode, ARTICLE_PLACE.childNodes[i]);
			}
		}
	}

	function handleBtnClick(event) {
		if (event.target.id == "delete-btn" || event.target.parentElement.id == "delete-btn") {

			var desition = confirm("Вы уверены что хотите удалить новость?");
			if (desition) {
				var articleNode;
				if (event.target.parentElement.id == "delete-btn") {
					articleNode = event.target.parentElement.parentElement.parentElement;
				} else {
					articleNode = event.target.parentElement.parentElement;
				}
				var articleID = articleNode.dataset.id;
				removeArticle(articleID);
				return;
			} else {
				return;
			}
		} else if (event.target.id == "full-delete-btn" || event.target.parentElement.id == "full-delete-btn") {
			var desition = confirm("Вы уверены что хотите удалить новость?");
			if (desition) {
				var articleNode;
				if (event.target.parentElement.id == "full-delete-btn") {
					articleNode = event.target.parentElement.parentElement.parentElement;
				} else {
					articleNode = event.target.parentElement.parentElement;
				}
				var articleID = articleNode.dataset.id;
				removeFullArticle(articleID);
				return;
			} else {
				return;
			}
		} else if (event.target.id == "open-text-btn") {
			var fullArticlePlace = document.querySelector(".news-column");
			fullArticlePlace.style.display = "none";
			var template = document.querySelector("#template-full-article");

			var articleID = event.target.parentElement.parentElement.parentElement.dataset.id;
			var article = articleModel.getArticle(articleID);

			template.content.querySelector(".news-article").dataset.id = article.id;
			template.content.querySelector(".news-article-body-title").textContent = article.title;
			template.content.querySelector(".news-article-body-content").textContent = article.content;
			template.content.querySelector(".news-article-info-author").textContent = article.author;
			template.content.querySelector(".news-article-info-data").textContent = formatDate(article.createdAt);
			var tags = template.content.querySelector(".news-article-info-tags");
			tags.innerHTML = "";

			for (var i = 0; i < article.tags.length; i++) {
				var tag = document.createElement("font");
				tag.innerHTML = "<font class='news-article-tag'>" + article.tags[i] + "</font>";
				tags.appendChild(tag);
			}

			var node = template.content.querySelector(".news-article").cloneNode(true);
			fullArticlePlace = document.querySelector(".news");

			if (userRenderer.getUserName() == null) {
				var elems = document.getElementsByClassName("article-actions");
				for (var i = 0; i < elems.length; i++) {
					elems[i].style.display = "none";
				}
			} else {
				var elems = document.getElementsByClassName("article-actions");
				for (var i = 0; i < elems.length; i++) {
					elems[i].style.display = "";
				}
			}

			fullArticlePlace.appendChild(node);

			if (userRenderer.getUserName() == null) {
				var elems = document.getElementsByClassName("article-actions");
				for (var i = 0; i < elems.length; i++) {
					elems[i].style.display = "none";
				}
			} else {
				var elems = document.getElementsByClassName("article-actions");
				for (var i = 0; i < elems.length; i++) {
					elems[i].style.display = "";
				}
			}
		} else if (event.target.id == "edit-btn") {
			var editArticlePlace = document.querySelector(".news-column");
			editArticlePlace.style.display = "none";
			var template = document.querySelector("#template-edit-article");

			var node = template.content.querySelector(".news-article-edit").cloneNode(true);


			editArticlePlace = document.querySelector(".news");

			editArticlePlace.appendChild(node);

			var articleNode = event.target.parentElement.parentElement;
			var articleID = articleNode.dataset.id;

			document.forms["edit-form"].elements["article-id-input"].value = articleID;
			document.forms["edit-form"].elements["article-author-input"].value = articleModel.getArticle(articleID).author;
			document.forms["edit-form"].elements["article-time-input"].value = formatDate(articleModel.getArticle(articleID).createdAt);
		} else if (event.target.id == "full-edit-btn" || event.target.parentElement.id == "full-edit-btn") {

		}
	}

	function userBtnClick(event) {
		if (event.target.id == "site-logo" || event.target.id == "newsName") {
			if (FULL_ARTICLE_PLACE.childNodes.length == 4) {
				FULL_ARTICLE_PLACE.removeChild(FULL_ARTICLE_PLACE.childNodes[3]);
				ARTICLE_PLACE.style.display = "";
				articleMoves.renderArticles(null, null, null);
			}
			return;
		}
	}

	function goToMainPage() {
		if (FULL_ARTICLE_PLACE.childNodes.length == 4) {
			FULL_ARTICLE_PLACE.removeChild(FULL_ARTICLE_PLACE.childNodes[3]);
			ARTICLE_PLACE.style.display = "";
			articleMoves.renderArticles(null, null, null);
		}
		return;
	}

	function removeFullArticleFromDOM() {
		FULL_ARTICLE_PLACE.removeChild(FULL_ARTICLE_PLACE.childNodes[3]);
		ARTICLE_PLACE.style.display = "";
		articleMoves.renderArticles(0, 5, filterModel.getFilterConfig);
	}

	return {
		init: init,
		insertArticlesInDOM: insertArticlesInDOM,
		removeArticlesFromDom: removeArticlesFromDom,
		removeArticleFromDOM: removeArticleFromDOM,
		removeFullArticleFromDOM: removeFullArticleFromDOM,
		insertArticleInDOM: insertArticleInDOM,
		editArticleInDOM: editArticleInDOM,
		goToMainPage: goToMainPage,
		formatDate: formatDate
	};
}())

function showPopUp(state) {
	document.getElementById('popup-window').style.display = state;
	document.getElementById('wrap').style.display = state;
}

document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
	articleRenderer.init();


	if (localStorage.getItem("articles") == null) {
		articleModel.takeToStorage();
	} else {
		articleModel.getFromStorage();
	}
	if (localStorage.getItem("filterConfig") == null) {
		filterModel.takeToStorage();
	} else {
		filterModel.getFromStorage();
		articleMoves.renderArticles(0, 5, filterModel.getFilterConfig());
	}
	if (localStorage.getItem("userName") == null) {
		userRenderer.logInOut("Верещако Павел");
		userRenderer.takeToStorage();
	} else {
		userRenderer.getFromStorage();
	}
	paginationModel.init();
	if (localStorage.getItem("currentPage") == null) {
		paginationModel.takeToStorage();
	} else {
		paginationModel.getFromStorage();
	}
}

var articleMoves = (function() {
	function renderArticles(skip, top, filterConfig) {
		articleRenderer.removeArticlesFromDom();

		var articles = articleModel.getArticles(skip, top, filterConfig);

		articleRenderer.insertArticlesInDOM(articles);

		if (userRenderer.getUserName() == null) {
			var elems = document.getElementsByClassName("article-actions");
			for (var i = 0; i < elems.length; i++) {
				elems[i].style.display = "none";
			}
		} else {
			var elems = document.getElementsByClassName("article-actions");
			for (var i = 0; i < elems.length; i++) {
				elems[i].style.display = "";
			}
		}
	}

	return {
		renderArticles: renderArticles
	}
}())

function addArticle(article) {
	if (articleModel.addArticle(article)) {
		articleRenderer.insertArticleInDOM(article);
		return true;
	} else {
		return false
	}
}

function removeArticle(id) {
	if (articleModel.removeArticle(id)) {
		articleRenderer.removeArticleFromDOM(id);
		return true;
	} else {
		return false;
	}
}

function removeFullArticle(id) {
	if (articleModel.removeArticle(id)) {
		articleRenderer.removeFullArticleFromDOM();
		return true;
	}
	return false;
}

function editArticle(id, newArticle) {
	if (articleModel.editArticle(id, newArticle)) {
		articleRenderer.editArticleInDOM(id, newArticle);
		return true;
	}
	return false;
}

function takeArticleFromInputAndEdit() {
	var inputObject = document.forms["edit-form"];
	var newArticle = {
		id: "",
		title: "",
		summary: "",
		createdAt: "",
		author: "",
		content: "",
		tags: []
	};

	newArticle.id = inputObject.elements["article-id-input"].value;
	newArticle.title = inputObject.elements["article-title-input"].value;
	newArticle.summary = inputObject.elements["article-summary-input"].value;
	newArticle.createdAt = inputObject.elements["article-time-input"].value;
	newArticle.author = inputObject.elements["article-author-input"].value;
	newArticle.content = inputObject.elements["article-content-input"].value;
	newArticle.tags = inputObject.elements["article-tags-input"].value.split(" ");
	if (!tagModel.validateTags(newArticle.tags)) {
		newArticle.tags.forEach(function(e) {
			tagModel.addTag(e);
		})
	}

	if (editArticle(newArticle.id, newArticle)) {
		articleRenderer.goToMainPage();
		articleMoves.renderArticles((paginationModel.getCurrentPage() - 1) * paginationModel.getArticlesPerPageCount(), 5, filterModel.getFilterConfig());
	}
}

function takeArticleFromInputAndAdd() {
	var inputObject = document.forms["add-form"];
	var newArticle = {
		id: "",
		title: "",
		summary: "",
		createdAt: "",
		author: "",
		content: "",
		tags: []
	};

	newArticle.id = inputObject.elements["article-id-input"].value;
	newArticle.title = inputObject.elements["article-title-input"].value;
	newArticle.summary = inputObject.elements["article-summary-input"].value;
	newArticle.createdAt = new Date();
	newArticle.author = inputObject.elements["article-author-input"].value;
	newArticle.content = inputObject.elements["article-content-input"].value;
	newArticle.tags = inputObject.elements["article-tags-input"].value.split(" ");
	if (!tagModel.validateTags(newArticle.tags)) {
		newArticle.tags.forEach(function(e) {
			tagModel.addTag(e);
		})
	}

	if (addArticle(newArticle)) {
		articleRenderer.goToMainPage();
	}

}

var userRenderer = (function() {
	var userName;
	var users = [{
		login: "Verpad",
		password: "89914020",
		name: "Верещако Павел"
	}, {
		login: "Nova",
		password: "1488",
		name: "Шавель Илья"
	}, {
		login: "NightFucker",
		password: "mymom№1",
		name: "Сахарчук Станислав"
	}, {
		login: "Hashut",
		password: "warhammer40000",
		name: "Янушкевич Андрей"
	}, {
		login: "Fuffelshmerz",
		password: "228",
		name: "Херндлхоффер Никита"
	}];

	function init(yourName) {
		userName = yourName;
	}

	function logInOut(yourName) {
		userName = yourName;
		var logBtn = document.getElementById("login-button");

		if (yourName == null) {
			var userField = document.getElementsByClassName("username");
			userField[1].innerHTML = '<h3><i class="fa fa-user" aria-hidden="true"></i> Гость</font></h3>';
			userField = document.getElementsByClassName("userActionText");
			for (var i = 0; i < userField.length; i++) {
				userField[i].style.display = "none";
			}
			logBtn.style.display = "";
		} else {
			var userField = document.getElementsByClassName("username");
			userField[1].innerHTML = '<h3><i class="fa fa-user" aria-hidden="true"></i> ' + userName + '</font></h3>';
			userField = document.getElementsByClassName("userActionText");
			for (var i = 0; i < userField.length; i++) {
				userField[i].style.display = "";
			}
			logBtn.style.display = "none";
		}
		takeToStorage();
		articleRenderer.goToMainPage();
	}

	function logInUser() {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < users.length; i++) {
			if (users[i].login.toLowerCase() == inputs[4].value.toLowerCase() && users[i].password == inputs[5].value) {
				logInOut(users[i].name);
				showPopUp("none");
			}
		}
	}

	function addArticle() {
		articleRenderer.goToMainPage();
		var editArticlePlace = document.querySelector(".news-column");
		editArticlePlace.style.display = "none";
		var template = document.querySelector("#template-add-article");

		var node = template.content.querySelector(".news-article-add").cloneNode(true);


		editArticlePlace = document.querySelector(".news");

		editArticlePlace.appendChild(node);

		var articleNode = event.target.parentElement.parentElement;

		document.forms["add-form"].elements["article-id-input"].value = GLOBAL_ID;
		document.forms["add-form"].elements["article-author-input"].value = userName;
		document.forms["add-form"].elements["article-time-input"].value = articleRenderer.formatDate(new Date());
	}

	function getUserName() {
		return userName;
	}

	function takeToStorage() {
		var userNameString = JSON.stringify(userName);
		localStorage.setItem("userName", userNameString);
	}

	function getFromStorage() {
		userName = JSON.parse(localStorage.getItem("userName"));
		logInOut(userName);
	}

	return {
		init: init,
		logInOut: logInOut,
		getUserName: getUserName,
		logInUser: logInUser,
		addArticle: addArticle,
		takeToStorage: takeToStorage,
		getFromStorage: getFromStorage
	}
}())

var filterModel = (function() {
	var filterConfig = {
		author: "",
		timeBot: new Date("1900-01-01T10:00:00"),
		timeTop: new Date(),
		tags: []
	};

	function addTagOption(tag) {
		var option = new Option(tag);
	}

	function applyFilter() {
		var form = document.forms["filter-form"];
		var tags = [];
		if (form["tags-input"].value == "") {
			tags = [];
		} else {
			tags = form["tags-input"].value.split(" ");
		}

		filterConfig.author = form["author-input"].value;
		if (form["first-date-input"].value == "") {
			filterConfig.timeBot = new Date("1900-01-01T10:00:00");
		} else {
			filterConfig.timeBot = new Date(form["first-date-input"].value);
		}
		if (form["last-date-input"].value == "") {
			filterConfig.timeTop = new Date();
		} else {
			filterConfig.timeTop = new Date(form["last-date-input"].value);
		}
		filterConfig.tags = tags;

		articleMoves.renderArticles(0, 5, filterConfig);
		paginationModel.init();

		takeToStorage();
	}

	function getFilterConfig() {
		return filterConfig;
	}

	function takeToStorage() {
		var filterConfigString = JSON.stringify(filterConfig);
		localStorage.setItem("filterConfig", filterConfigString);
	}

	function getFromStorage() {
		filterConfig = JSON.parse(localStorage.getItem("filterConfig"));
		filterConfig.timeBot = new Date(filterConfig.timeBot);
		filterConfig.timeTop = new Date(filterConfig.timeTop);

		var form = document.forms["filter-form"];
		filterConfig.tags.forEach(function(tag) {
			form["tags-input"].value = form["tags-input"].value.concat(" " + tag);
		});
		form["author-input"].value = filterConfig.author;
		//form["first-date-input"].value = filterConfig.timeBot.toLocaleString();
		//form["last-date-input"].value = filterConfig.timeTop.toLocaleString();
	}

	return {
		applyFilter: applyFilter,
		getFilterConfig: getFilterConfig,
		takeToStorage: takeToStorage,
		getFromStorage: getFromStorage
	}
}())

var paginationModel = (function() {
	var ARTICLES_PER_PAGE = 5;
	var totalArticlesCount;
	var currentPage;

	function init() {
		totalArticlesCount = articleModel.getArticles(0, 1000, filterModel.getFilterConfig()).length;
		currentPage = 1;
		drawCurrentPageNumber();
		hidePrevPageBtn();
		if (totalArticlesCount / ARTICLES_PER_PAGE <= 1) {
			hideNextPageBtn();
		} else {
			showNextPageBtn();
		}
	}

	function drawCurrentPageNumber() {
		document.getElementById("current-page-number").textContent = currentPage;
	}

	function hideNextPageBtn() {
		document.getElementById("next-page-btn").style.display = "none";
	}

	function hidePrevPageBtn() {
		document.getElementById("prev-page-btn").style.display = "none";
	}

	function showNextPageBtn() {
		document.getElementById("next-page-btn").style.display = "";
	}

	function showPrevPageBtn() {
		document.getElementById("prev-page-btn").style.display = "";
	}


	function nextPage() {
		currentPage++;
		articleMoves.renderArticles(ARTICLES_PER_PAGE * (currentPage - 1), ARTICLES_PER_PAGE, filterModel.getFilterConfig());
		showPrevPageBtn();
		drawCurrentPageNumber();
		if (ARTICLES_PER_PAGE * currentPage >= totalArticlesCount) {
			hideNextPageBtn();
		}
		takeToStorage();
	}

	function prevPage() {
		currentPage--;
		articleMoves.renderArticles(ARTICLES_PER_PAGE * (currentPage - 1), ARTICLES_PER_PAGE, filterModel.getFilterConfig());
		showNextPageBtn();
		drawCurrentPageNumber();
		if (currentPage == 1) {
			hidePrevPageBtn();
		}
		takeToStorage();
	}

	function takeToStorage() {
		var currentPageString = JSON.stringify(currentPage);
		localStorage.setItem("currentPage", currentPageString);
	}

	function getFromStorage() {
		currentPage = JSON.parse(localStorage.getItem("currentPage"));
		drawCurrentPageNumber();
		articleMoves.renderArticles(ARTICLES_PER_PAGE * (currentPage - 1), ARTICLES_PER_PAGE, filterModel.getFilterConfig());
		if (currentPage == 1) {
			hidePrevPageBtn();
		} else {
			showPrevPageBtn();
		}
		if (ARTICLES_PER_PAGE * currentPage >= totalArticlesCount) {
			hideNextPageBtn();
		} else {
			showNextPageBtn();
		}
	}

	function getCurrentPage() {
		return currentPage;
	}

	function getArticlesPerPageCount() {
		return ARTICLES_PER_PAGE;
	}

	return {
		init: init,
		nextPage: nextPage,
		prevPage: prevPage,
		takeToStorage: takeToStorage,
		getFromStorage: getFromStorage,
		getCurrentPage: getCurrentPage,
		getArticlesPerPageCount: getArticlesPerPageCount
	}
}())