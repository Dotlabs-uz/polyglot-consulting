
import { CountryData } from './types';

export const COUNTRIES: CountryData[] = [
  {
    id: 'usa',
    name: 'AQSH',
    flag: '🇺🇸',
    description: "Amerikadagi eng nufuzli universitetlar va yuqori grantlar",
    universities: [
      { id: 1, name: 'Duke University', rank: 'Top 7chi milliy universitet', advantages: ['Juda nufuzli, kuchli diplom', 'Biznes, muhandislik, tibbiyot', 'Yuqori grantlar'] },
      { id: 2, name: 'Arizona State University', rank: 'QS #173', advantages: ['Innovatsiya, IT va muhandislik', 'Katta kampus', 'Ishga joylashish imkoni'] },
      { id: 3, name: 'Rochester Institute of Technology', rank: 'Dizayn bo’yicha Top 3', advantages: ['Texnologiya, IT, muhandislik', 'Co-op (amaliy ish) tizimi'] },
      { id: 8, name: 'Rose-Hulman Institute of Technology', rank: 'Muhandislikda #1', advantages: ['Bakalavr muhandislik bo‘yicha AQSHda №1'] },
      { id: 11, name: 'California State University Long Beach', rank: 'National #251-300', advantages: ['Kuchli davlat universiteti', 'Arzonroq kontrakt'] },
    ]
  },
  {
    id: 'canada',
    name: 'KANADA',
    flag: '🇨🇦',
    description: "O'qishdan so'ng ishlash va immigratsiya imkoniyatlari",
    universities: [
      { id: 101, name: 'University of British Columbia', rank: 'QS #40', advantages: ['Juda nufuzli, kuchli diplom', 'Ilmiy tadqiqot', 'Ish beruvchilar tan oladi'] },
      { id: 102, name: 'Ontario Tech University', rank: 'Youth Ranking #201-250', advantages: ['IT, muhandislik, data analitika', 'Zamonaviy yo‘nalishlar'] },
      { id: 108, name: 'George Brown College', rank: 'Top College', advantages: ['Amaliy ta’lim', 'Toronto markazi', 'Co-op'] },
      { id: 109, name: 'Conestoga College', rank: 'Top College', advantages: ['Juda kuchli ishga joylashish', 'IT va texnika'] },
    ]
  },
  {
    id: 'uk',
    name: 'Buyuk Britaniya',
    flag: '🇬🇧',
    description: "Klassik Britaniya ta'limi va Russell Group universitetlari",
    universities: [
      { id: 200, name: 'HULT Business School', rank: '#1 Business School', advantages: ['Biznes boshqaruvi', 'Xalqaro networking', 'Global kampuslar'] },
      { id: 201, name: 'Durham University', rank: 'QS #94', advantages: ['Juda nufuzli, kuchli diplom', 'Ish beruvchilar tan oladi'] },
      { id: 202, name: 'University of Bristol', rank: 'QS #51', advantages: ['Russell Group', 'Muhandislik, biznes, tibbiyot'] },
      { id: 203, name: 'University of Glasgow', rank: 'QS #79', advantages: ['Kuchli ilmiy tadqiqot', 'Xalqaro obro‘'] },
    ]
  },
  {
    id: 'germany',
    name: 'GERMANIYA',
    flag: '🇩🇪',
    description: "Yevropaning iqtisodiy markazida amaliy ta'lim",
    universities: [
      { id: 301, name: 'UE (University of Europe for Applied Sciences)', rank: 'Berlin / Hamburg', advantages: ['IT, Business, Design, Media', '100% ingliz tilida', 'Amaliy loyiha + kompaniyalar bilan ishlash'] },
      { id: 302, name: 'GISMA University', rank: 'AACSB Accredited', advantages: ['Berlin / Potsdam / Hannover', 'Kuchli career services', 'Germaniya + Yevropa ish bozori'] },
      { id: 309, name: 'IU International University', rank: 'Highly Flexible', advantages: ['100% online yoki hybrid', 'O‘qish paytida to‘liq ishlash', 'Germaniya vizasi bilan mos'] },
      { id: 310, name: 'Kühne Logistics University', rank: 'Top Logistics Europe', advantages: ['Logistics & SCM bo‘yicha TOP', 'Hamburg logistika markazi'] },
    ]
  },
  {
    id: 'malaysia',
    name: 'MALAYZIA',
    flag: '🇲🇾',
    description: "Osiyo markazida xalqaro standartlardagi ta'lim",
    universities: [
      { id: 501, name: 'INTI International University', rank: 'QS #509', advantages: ['2+2 Amerika/Kanada dasturi', '99% ishga joylashish', 'Ingliz tilida dasturlar'] },
      { id: 502, name: 'APU (Asia Pacific University)', rank: 'QS #620-630', advantages: ['IT, Texnologiya, Media', '130+ davlatdan talabalar'] },
      { id: 506, name: 'Taylor\'s University', rank: 'QS #250-300', advantages: ['Eng yuqori ish topish ko‘rsatkichi', 'Kuchli biznes va IT'] },
      { id: 509, name: 'Southampton Malaysia', rank: 'QS #87 (UK)', advantages: ['Britaniya standarti', 'UKga transfer imkoni'] },
    ]
  },
  {
    id: 'turkey',
    name: 'TURKIYA',
    flag: '🇹🇷',
    description: "Zamonaviy kampuslar va qulay hayot darajasi",
    universities: [
      { id: 601, name: 'Bahcesehir University (BAU)', rank: 'Top 10-15 Turkey', advantages: ['Istanbul markazida', '100% ingliz tilidagi dasturlar', 'Kuchli xalqaro hamkorliklar'] },
      { id: 602, name: 'Istanbul Medipol University', rank: 'Top Medical', advantages: ['Tibbiyot va biotexnologiya', 'Zamonaviy kampuslar', 'Qulay narx + sifat balansi'] },
      { id: 603, name: 'Beykent University', rank: 'Budget Friendly', advantages: ['Istanbulda yashash va ishlash', 'Biznes, IT, dizayn'] },
    ]
  },
  {
    id: 'lithuania',
    name: 'LITVA',
    flag: '🇱🇹',
    description: "Yevropadagi nufuzli davlat universitetlari",
    universities: [
      { id: 701, name: 'Vilnius University', rank: 'QS #400-450', advantages: ['LITVADA №1 UNIVERSITET', 'IT, Economics, Natural Sciences', 'Yashash xarajatlari past'] },
      { id: 702, name: 'ISM University', rank: 'Top Private Business', advantages: ['Business, Management, Finance', 'Kuchli career services', 'Double degree imkoniyatlari'] },
    ]
  },
  {
    id: 'latvia',
    name: 'LATVIA',
    flag: '🇱🇻',
    description: "Yevropa diplomiga ega bo'lishning eng arzon yo'li",
    universities: [
      { id: 401, name: 'TSI (Transport and Telecommunication Institute)', rank: 'Budget Choice', advantages: ['IT, Computer Science', 'Transport & Logistics', 'EU diplomi'] },
      { id: 402, name: 'EKA University of Applied Sciences', rank: 'Most Affordable EU', advantages: ['Business Administration', 'Marketing & Economics', 'IELTS 5.5+'] },
    ]
  }
];
