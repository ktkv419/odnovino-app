// checkbox states all => all; undefined => all
export type IWineColor = 'Красное' | 'Белое' | 'Розовое' | 'Оранжевое'
export interface IWine {
  id: string
  // input text
  name: string
  // input text+checkbox (hides when input has text)
  grapes: string[]
  // input text+checkbox (hides when input has text)
  location: {
    region?: string
    country: string
  }
  // input checkbox
  // Тихое крепленое
  // Тихое десертное
  // Тихое
  // Игристое
  // type: ['Игристое', '']
  // sparkling state = checked => only sparkling, unchecked => all
  sparkling: boolean
  // Только у игристого. Шарма и тд
  sparklingType?: string
  // Только у тихого. Десертное / крепленое
  type?: string[]
  // input checkbox
  color: IWineColor
  // input range
  sweetness: {
    name: string
    scale: number
  }
  // input range
  intensity: {
    name: string
    scale: number
  }
  // input range
  bitterness: {
    name: string
    scale: number
  }
  // input range
  tannins?: {
    name: string
    scale: number
  }
  // input checkbox
  // Может быть у любого вина
  growth?: boolean
  // Тоже у любого вина
  // Выдержка
  extract?: boolean
  volume: number
  price: number
}

const allWine: IWine[] = [
  {
    id: '0',
    name: '"Маркеза Винченца Станга" Гран Дессерт',
    grapes: ['Треббьяно', 'Гарганега', 'Мускат'],
    location: { region: 'Пьемонт', country: 'Италия' },
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
    location: { region: 'Долина Луары', country: 'Франция' },
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
    location: { region: 'Венето', country: 'Италия' },
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
    location: { region: 'Кубань', country: 'Россия' },
    // country: 'Новороссийск, Кубань, Россия',
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
    location: { region: 'Рейнхессен', country: 'Германия' },
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
    location: { region: 'Стелленбош', country: 'ЮАР' },
    // country: ', Западный Кейп, ',
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
    location: { region: 'Каталония', country: 'Испания' },
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
    location: { region: 'Прованс', country: 'Франция' },
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
    location: { region: 'Тоскана', country: 'Италия' },
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
    location: { region: "О'медок", country: 'Франция' },
    // country: "О'Медок, Бордо, Франция",
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
    location: { region: 'Бургеланд', country: 'Австрия' },
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
    location: { region: 'Дору', country: 'Португалия' },
    sparkling: false,
    type: ['Крепленое'],
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
    location: { region: 'Долина Кальчаки', country: 'Аргентина' },
    // че сука значит десертное :C
    sparkling: true,
    sparklingType: 'Десертное',
    color: 'Белое',
    sweetness: { name: 'Сладкое', scale: 5 },
    intensity: { name: 'Плотное', scale: 3 },
    bitterness: { name: 'Мягкое', scale: 0 },
    volume: 500,
    price: 1800,
  },
]

export default allWine
