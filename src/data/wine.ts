export interface IWine {
  id: string
  name: string
  grapes: string[]
  country: string
  sparkling: boolean
  sparklingType?: string
  color: string
  sweetness: {
    name: string
    scale: number
  }
  intensity: {
    name: string
    scale: number
  }
  bitterness: {
    name: string
    scale: number
  }
  tannins?: {
    name: string
    scale: number
  }
  volume: number
  price: number
}

const allWine: IWine[] = [
  {
    id: '0',
    name: '"Маркеза Винченца Станга" Гран Дессерт',
    grapes: ['Треббьяно', 'Гарганега', 'Мускат'],
    country: 'Пьемонт, Италия',
    sparkling: true,
    sparklingType: 'Шарма',
    color: 'Белое',
    sweetness: {
      name: 'Сладкое',
      scale: 5,
    },
    intensity: { name: 'Легкое', scale: 0 },
    bitterness: { name: 'Мягкое', scale: 0 },
    volume: 750,
    price: 1120,
  },
  {
    id: '1',
    name: 'Буве Розе, 2018',
    grapes: ['Каберне Фран'],
    country: 'Долина Луары, Франция',
    sparkling: true,
    sparklingType: 'Традиционный',
    color: 'Розовое',
    sweetness: { name: 'Сухое', scale: 0 },
    intensity: { name: 'Легкое', scale: 0 },
    bitterness: { name: 'Мягкое', scale: 1 },
    volume: 750,
    price: 2800,
  },
  {
    id: '2',
    name: '"Лунетта" Просекко DOC, 2021',
    grapes: ['Глера'],
    country: 'Венето, Италия',
    sparkling: true,
    sparklingType: 'Шарма',
    color: 'Белое',
    sweetness: { name: 'Сухое', scale: 1 },
    intensity: { name: 'Легкое', scale: 0 },
    bitterness: { name: 'Мягкое', scale: 0 },
    volume: 750,
    price: 2420,
  },
  {
    id: '3',
    name: 'Шато Пино, Петнат Мерло ЗГУ, 2021',
    grapes: ['Мерло'],
    country: 'Новороссийск, Кубань, Россия',
    sparkling: true,
    color: 'Красное',
    sweetness: { name: 'Сухое', scale: 0 },
    intensity: { name: 'Плотное', scale: 2 },
    bitterness: { name: 'Мягкое', scale: 1 },
    // ???????????? Красное же
    // tannins: '',
    // tanninsScale: ,
    volume: 750,
    price: 1680,
  },
  {
    id: '4',
    name: 'Ханс Баер Рислинг, 2021',
    grapes: ['Рислинг'],
    country: 'Рейнхессен, Германия',
    sparkling: false,
    color: 'Белое',
    sweetness: { name: 'Полусухое', scale: 2 },
    intensity: { name: 'Легкое', scale: 0 },
    bitterness: { name: 'Мягкое', scale: 0 },
    volume: 750,
    price: 1680,
  },
  {
    id: '5',
    name: 'Рейнеке Резерв, 2020',
    grapes: ['Совиньон Блан'],
    country: 'Стелленбош, Западный Кейп, ЮАР',
    sparkling: false,
    color: 'Белое',
    sweetness: { name: 'Сухое', scale: 0 },
    intensity: { name: 'Плотное', scale: 3 },
    bitterness: { name: 'Кислотное', scale: 3 },
    volume: 750,
    price: 3980,
  },
  {
    id: '6',
    name: 'Костадор, "Метаморфика" Чарелло Брисат, 2020',
    grapes: ['Шарельо'],
    country: 'Каталония, Испания',
    sparkling: false,
    color: 'Оранжевое',
    sweetness: { name: 'Сухое', scale: 0 },
    intensity: { name: 'Плотное', scale: 3 },
    bitterness: { name: 'Кислотное', scale: 2 },
    volume: 750,
    price: 3980,
  },
  {
    id: '7',
    name: 'Луи Майе Кот де Прованс AOP, 2021',
    grapes: ['Гренаш', 'Сенсо', 'Сира'],
    country: 'Прованс, Франция',
    sparkling: false,
    color: 'Розовое',
    sweetness: { name: 'Сухое', scale: 0 },
    intensity: { name: 'Легкое', scale: 0 },
    bitterness: { name: 'Мягкое', scale: 1 },
    volume: 750,
    price: 1970,
  },
  {
    id: '8',
    name: 'Сасси Кьюзи IGT, 2017',
    grapes: ['Мерло', 'Санджовезе'],
    country: 'Тоскана, Италия',
    sparkling: false,
    color: 'Красное',
    sweetness: { name: 'Сухое', scale: 0 },
    intensity: { name: 'Плотное', scale: 3 },
    bitterness: { name: 'Кислотное', scale: 2 },
    tannins: { name: 'Танинное', scale: 2 },
    volume: 750,
    price: 4590,
  },
  {
    id: '9',
    name: 'Шато Ля Лагун О’Медок AOC, 2016',
    grapes: ['Каберне Совиньон', 'Мерло', 'Пти Вердо'],
    country: "О'Медок, Бордо, Франция",
    sparkling: false,
    color: 'Красное',
    sweetness: { name: 'Сухое', scale: 0 },
    intensity: { name: 'Плотное', scale: 3 },
    bitterness: { name: 'Кислотное', scale: 3 },
    tannins: { name: 'Танинное', scale: 1 },
    volume: 750,
    price: 9840,
  },
  {
    id: '10',
    name: 'Блауэр Цвайгельт, Анита & Ханс Ниттнаус, 2019',
    grapes: ['Цвайгельт'],
    country: 'Бургенланд, Австрия',
    sparkling: false,
    color: 'Красное',
    sweetness: { name: 'Сухое', scale: 0 },
    intensity: { name: 'Плотное', scale: 3 },
    bitterness: { name: 'Кислотное', scale: 2 },
    tannins: { name: 'Нетанинное', scale: 0 },
    volume: 750,
    price: 2990,
  },
  {
    id: '11',
    name: 'Копке Лейт Боттлед Винтедж, 2016',
    grapes: [
      'Турига Насьональ',
      'Турига Франка',
      'Тинта Рориз',
      'Тинта Баррока',
      'Сузао',
    ],
    country: 'Дору, Португалия',
    sparkling: false,
    // КРЕПЛЕНОЕ БЛЯТЬ SPARKLING ИЛИ НЕТ И ЧЕ ПО ЦВЕТУ
    color: 'Красное',
    sweetness: { name: 'Сладкое', scale: 5 },
    intensity: { name: 'Плотное', scale: 3 },
    // Да ты рофлишь, он кислый или нет...
    bitterness: { name: 'та хуй его знает', scale: 1 },
    volume: 750,
    price: 3700,
  },
  {
    id: '12',
    name: '"Дон Давид" Торронтес Лейт Харвест',
    grapes: ['Торронтес'],
    country: 'Долина Кальчаки, Аргентина',
    // че сука значит десертное :C
    sparkling: true,
    color: 'Белое',
    sweetness: { name: 'Сладкое', scale: 5 },
    intensity: { name: 'Плотное', scale: 3 },
    bitterness: { name: 'Мягкое', scale: 0 },
    volume: 500,
    price: 1800,
  },
]

export default allWine
