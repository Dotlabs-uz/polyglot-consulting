import { CountryData } from "./types";

export const COUNTRIES: CountryData[] = [
	{
		id: "usa",
		name: "AQSH",
		flag: "🇺🇸",
		description:
			"Amerikadagi eng nufuzli universitetlar va yuqori grantlar",
		universities: [
			{
				id: 1,
				name: "Duke University",
				rank: "Top 7chi milliy universitet",
				advantages: [
					"Juda nufuzli, kuchli diplom",
					"Biznes, muhandislik, tibbiyot",
					"Yuqori grantlar",
				],
			},
			{
				id: 2,
				name: "Arizona State University",
				rank: "QS #173",
				advantages: [
					"Innovatsiya, IT va muhandislik",
					"Katta kampus",
					"Ishga joylashish imkoni",
				],
			},
			{
				id: 3,
				name: "Rochester Institute of Technology",
				rank: "Dizayn bo’yicha Top 3",
				advantages: [
					"Texnologiya, IT, muhandislik",
					"Co-op (amaliy ish) tizimi",
				],
			},
			{
				id: 4,
				name: "University of Connecticut",
				rank: "QS #534",
				advantages: [
					"Kuchli davlat universiteti",
					"STEM va biznes",
					"Obro‘li diplom",
				],
			},
			{
				id: 5,
				name: "University of Oregon",
				rank: "AQSH Top 100",
				advantages: [
					"Marketing va jurnalistika",
					"Ekologiya",
					"Kuchli kampus hayoti",
				],
			},
			{
				id: 6,
				name: "Syracuse University",
				rank: "QS #741",
				advantages: [
					"Media va jurnalistika",
					"Xalqaro aloqalar",
					"Kuchli alumni tarmog‘i",
				],
			},
			{
				id: 7,
				name: "Stevens Institute of Technology",
				rank: "QS #673",
				advantages: [
					"Muhandislik va IT",
					"Nyu-York yaqinligi",
					"Kuchli ish bozori",
				],
			},
			{
				id: 8,
				name: "Rose-Hulman Institute of Technology",
				rank: "Muhandislikda #1",
				advantages: ["Bakalavr muhandislik bo‘yicha AQSHda №1"],
			},
			{
				id: 9,
				name: "University of Maryland Baltimore County",
				rank: "QS #801-850",
				advantages: [
					"STEM va IT",
					"Kiberxavfsizlik",
					"Tez rivojlanayotgan universitet",
				],
			},
			{
				id: 10,
				name: "Marquette University",
				rank: "National #88",
				advantages: [
					"Biznes",
					"Sog‘liqni saqlash",
					"Barqaror ta’lim sifati",
				],
			},
			{
				id: 11,
				name: "California State University Long Beach",
				rank: "National #251-300",
				advantages: ["Kuchli davlat universiteti", "Arzonroq kontrakt"],
			},
			{
				id: 12,
				name: "California State University Northridge",
				rank: "Top 10 Regional",
				advantages: ["Biznes va IT", "Kaliforniya ish bozori"],
			},
			{
				id: 13,
				name: "University of Louisville",
				rank: "National #158",
				advantages: ["Tibbiyot", "Muhandislik", "Ilmiy tadqiqotlar"],
			},
			{
				id: 14,
				name: "Brandeis International Business School",
				rank: "Business School",
				advantages: ["Magistratura dasturlari", "Xalqaro biznes"],
			},
		],
	},
	{
		id: "canada",
		name: "KANADA",
		flag: "🇨🇦",
		description: "O'qishdan so'ng ishlash va immigratsiya imkoniyatlari",
		universities: [
			{
				id: 101,
				name: "University of British Columbia",
				rank: "QS #40",
				advantages: [
					"Juda nufuzli, kuchli diplom",
					"Ilmiy tadqiqot",
					"Ish beruvchilar tan oladi",
				],
			},
			{
				id: 102,
				name: "Ontario Tech University",
				rank: "Youth Ranking #201-250",
				advantages: [
					"IT, muhandislik, data analitika",
					"Zamonaviy yo‘nalishlar",
				],
			},
			{
				id: 103,
				name: "Brock University",
				rank: "Goodman School of Business Top #250-300",
				advantages: ["Biznes", "Pedagogika", "Yaxshi kampus muhiti"],
			},
			{
				id: 104,
				name: "Thompson Rivers University",
				rank: "National Top 40-50",
				advantages: [
					"Arzonroq kontrakt",
					"Xalqaro talabalar uchun qulay",
				],
			},
			{
				id: 105,
				name: "Algoma University",
				rank: "UNIRANK #74",
				advantages: ["Kichik sinflar", "Individual yondashuv"],
			},
			{
				id: 106,
				name: "Capilano University",
				rank: "UNIRANK #60-70",
				advantages: ["San’at, dizayn, biznes", "Vankuver joylashuvi"],
			},
			{
				id: 107,
				name: "Fairleigh Dickinson University in Vancouver",
				rank: "AQSH diplom",
				advantages: ["AQSH universiteti diplomi", "Kanada joylashuvi"],
			},
			{
				id: 108,
				name: "George Brown College",
				rank: "Top College",
				advantages: ["Amaliy ta’lim", "Toronto markazi", "Co-op"],
			},
			{
				id: 109,
				name: "Conestoga College",
				rank: "Top College",
				advantages: ["Juda kuchli ishga joylashish", "IT va texnika"],
			},
			{
				id: 110,
				name: "Alexander College",
				rank: "Transfer College",
				advantages: ["Universitetga o‘tish (transfer) uchun ideal"],
			},
		],
	},
	{
		id: "uk",
		name: "Buyuk Britaniya",
		flag: "🇬🇧",
		description:
			"Klassik Britaniya ta'limi va Russell Group universitetlari",
		universities: [
			{
				id: 200,
				name: "HULT Business School",
				rank: "Global #1 Business School",
				advantages: [
					"Biznes boshqaruvi",
					"Xalqaro networking",
					"Global kampuslar",
				],
			},
			{
				id: 201,
				name: "Durham University",
				rank: "QS #94",
				advantages: [
					"Juda nufuzli, kuchli diplom",
					"Ish beruvchilar tan oladi",
				],
			},
			{
				id: 202,
				name: "University of Bristol",
				rank: "QS #51",
				advantages: ["Russell Group", "Muhandislik, biznes, tibbiyot"],
			},
			{
				id: 203,
				name: "University of Glasgow",
				rank: "QS #79",
				advantages: ["Kuchli ilmiy tadqiqot", "Xalqaro obro‘"],
			},
			{
				id: 204,
				name: "University of Nottingham",
				rank: "QS #97",
				advantages: ["Global kampuslar", "Biznes va muhandislik"],
			},
			{
				id: 205,
				name: "University of Sheffield",
				rank: "QS #92",
				advantages: ["Muhandislik", "Arxitektura", "Ilmiy izlanish"],
			},
			{
				id: 206,
				name: "University of Leeds",
				rank: "QS #86",
				advantages: ["Katta kampus", "Biznes", "Media"],
			},
			{
				id: 207,
				name: "University of Birmingham",
				rank: "QS #76",
				advantages: ["Russell Group", "Kuchli akademiya"],
			},
			{
				id: 208,
				name: "Cardiff University",
				rank: "QS #181",
				advantages: ["Tadqiqot", "Tibbiyot", "Muhandislik"],
			},
			{
				id: 209,
				name: "University of York",
				rank: "QS #169",
				advantages: ["Tadqiqotga yo‘naltirilgan", "Kuchli akademiya"],
			},
		],
	},
	{
		id: "germany",
		name: "GERMANIYA",
		flag: "🇩🇪",
		description: "Yevropaning iqtisodiy markazida amaliy ta'lim",
		universities: [
			{
				id: 301,
				name: "University of Europe for Applied Sciences",
				rank: "Berlin / Hamburg / Potsdam",
				advantages: [
					"IT, Business, Design, Media juda kuchli",
					"Ingliz tilida 100% dasturlar",
					"Amaliy loyiha + kompaniyalar bilan ishlash",
					"Xalqaro talabalar uchun moslashgan tizim",
				],
			},
			{
				id: 302,
				name: "GISMA University of Applied Sciences",
				rank: "AACSB Accredited",
				advantages: [
					"Berlin / Potsdam / Hannover",
					"Kuchli career services",
					"Germaniya + Yevropa ish bozori bilan bog‘liq",
				],
			},
			{
				id: 303,
				name: "Berlin School of Business and Innovation",
				rank: "Berlin Central",
				advantages: [
					"Kirish talablari nisbatan oson",
					"Startup va kreativ muhit",
					"Ingliz tilida ta’lim",
				],
			},
			{
				id: 304,
				name: "Fresenius University of Applied Sciences",
				rank: "Germany Well-Known Brand",
				advantages: [
					"Business, Psychology, Health, IT",
					"Frankfurt / Berlin / Munich",
					"Kuchli ish beruvchilar tarmog‘i",
				],
			},
			{
				id: 305,
				name: "CBS University of Applied Sciences",
				rank: "Cologne / Berlin / Hamburg",
				advantages: [
					"International Business & Finance kuchli",
					"Dual-study (o‘qish + ish) imkoniyati",
					"Germaniya kompaniyalari bilan aloqalar",
				],
			},
			{
				id: 306,
				name: "SRH University of Applied Sciences",
				rank: "CORE Learning Model",
				advantages: [
					"IT, Engineering, Business",
					"Katta kampus tarmog‘i",
					"Individual yondashuv",
				],
			},
			{
				id: 307,
				name: "Schiller International University",
				rank: "Germany + Europe + USA Campuses",
				advantages: [
					"Diplom mobil (country transfer)",
					"Ingliz tilida",
					"Kichik guruhlar",
				],
			},
			{
				id: 308,
				name: "ICN Berlin Business School",
				rank: "Affiliated with ICN France",
				advantages: [
					"Yevropa biznes tarmog‘i",
					"Exchange va double degree imkoniyati",
					"Strategiya va menejment kuchli",
				],
			},
			{
				id: 309,
				name: "IU International University of Applied Sciences",
				rank: "Highly Flexible",
				advantages: [
					"100% online yoki hybrid",
					"O‘qish paytida to‘liq ishlash mumkin",
					"IT, Data, Business, Healthcare",
					"Germaniya vizasi bilan juda mos",
				],
			},
			{
				id: 310,
				name: "Kühne Logistics University",
				rank: "Top Logistics Europe",
				advantages: [
					"Logistics & Supply Chain bo‘yicha Yevropada TOP",
					"Hamburg — logistika markazi",
					"Katta kompaniyalar bilan to‘g‘ridan-to‘g‘ri aloqa",
					"Kuchli bitiruvchi ish statistikasi",
				],
			},
		],
	},
	{
		id: "malaysia",
		name: "MALAYZIA",
		flag: "🇲🇾",
		description: "Osiyo markazida xalqaro standartlardagi ta'lim",
		universities: [
			{
				id: 501,
				name: "INTI International University and Colleges",
				rank: "QS #509",
				advantages: [
					"2+2 Amerikada va Kanada da o’qish imkoniyati",
					"Kuchli ishga joylashish statistikasi (99 % bitiruvchilarga ish)",
					"Xalqaro kampus tarmog‘i va ko‘p turli sohalar",
					"Ingliz tilida dasturlar",
				],
			},
			{
				id: 502,
				name: "Asia Pacific University of Technology and Innovation",
				rank: "QS #620-630",
				advantages: [
					"IT, Texnologiya, Media va Biznes yo‘nalishlari kuchli",
					"Talabalar 130+ davlatdan — juda xalqaro muhit",
					"Ingliz tilida o‘qish",
				],
			},
			{
				id: 503,
				name: "City University Malaysia",
				rank: "Budget-friendly",
				advantages: [
					"Byudjetga mos narxlar",
					"Ko‘p yo‘nalishlar: Biznes, IT, Hospitality",
					"Ingliz tilida o‘qish",
				],
			},
			{
				id: 504,
				name: "MAHSA University",
				rank: "THE Malaysia #801–1000",
				advantages: [
					"Sog‘liqni saqlash, tibbiyot, biznes yo‘nalishlari uchun mashhur",
					"Xalqaro talabalar uchun mos",
					"Byudjet variant sifatida yaxshi",
				],
			},
			{
				id: 505,
				name: "Sunway University",
				rank: "QS #580, THE Malaysia #300–350",
				advantages: [
					"Global hamkorliklar — Lancaster, Le Cordon Bleu, boshqalar",
					"Kuchli biznes va hospitality dasturlar",
					"Kuchli xalqaro talabalar jamiyati",
				],
			},
			{
				id: 506,
				name: "Taylor's University",
				rank: "QS #250–300",
				advantages: [
					"Eng yuqori ish topish ko‘rsatkichlari",
					"Kuchli biznes, IT, muhandislik va sog‘liq yo‘nalishlari",
					"Kuchli global obro‘",
				],
			},
			{
				id: 507,
				name: "MMU University",
				rank: "QS ~1000+",
				advantages: [
					"IT, Telecommunication va Media yo‘nalishlari mashhur",
					"Telekom Malaysia bilan bog‘liqlik",
					"Xalqaro talabalar uchun mos",
				],
			},
			{
				id: 509,
				name: "University of Southampton Malaysia",
				rank: "QS #87 (UK kampus asosiy)",
				advantages: [
					"Britaniya standartlari bo‘yicha diploma",
					"Kuchli o‘quv dasturlar, global obro‘",
					"UKga transfer / davom ettirish uchun shartlar juda yaxshi",
				],
			},
		],
	},
	{
		id: "turkey",
		name: "TURKIYA",
		flag: "🇹🇷",
		description: "Zamonaviy kampuslar va qulay hayot darajasi",
		universities: [
			{
				id: 601,
				name: "Bahcesehir University (BAU)",
				rank: "Top 10-15 Turkey",
				advantages: [
					"Istanbul markazida",
					"100% ingliz tilidagi dasturlar",
					"Kuchli xalqaro hamkorliklar",
				],
			},
			{
				id: 602,
				name: "Istanbul Medipol University",
				rank: "Top Medical",
				advantages: [
					"Tibbiyot va biotexnologiya",
					"Zamonaviy kampuslar",
					"Qulay narx + sifat balansi",
				],
			},
			{
				id: 603,
				name: "Beykent University",
				rank: "Budget Friendly",
				advantages: [
					"Istanbulda yashash va ishlash",
					"Biznes, IT, dizayn",
				],
			},
		],
	},
	{
		id: "lithuania",
		name: "LITVA",
		flag: "🇱🇹",
		description: "Yevropadagi nufuzli davlat universitetlari",
		universities: [
			{
				id: 701,
				name: "Vilnius University",
				rank: "QS #400-450",
				advantages: [
					"LITVADA №1 UNIVERSITET",
					"IT, Economics, Natural Sciences",
					"Yashash xarajatlari past",
				],
			},
			{
				id: 702,
				name: "ISM University",
				rank: "Top Private Business",
				advantages: [
					"Business, Management, Finance",
					"Kuchli career services",
					"Double degree imkoniyatlari",
				],
			},
		],
	},
	{
		id: "latvia",
		name: "LATVIA",
		flag: "🇱🇻",
		description: "Yevropa diplomiga ega bo'lishning eng arzon yo'li",
		universities: [
			{
				id: 401,
				name: "TSI (Transport and Telecommunication Institute)",
				rank: "Budget Choice",
				advantages: [
					"IT, Computer Science",
					"Transport & Logistics",
					"EU diplomi",
				],
			},
			{
				id: 402,
				name: "EKA University of Applied Sciences",
				rank: "Most Affordable EU",
				advantages: [
					"Business Administration",
					"Marketing & Economics",
					"IELTS 5.5+",
				],
			},
		],
	},
];
