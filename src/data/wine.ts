export interface IWine {
  id: string
  name: string
  fullName: string
  country: string
  type: string
  typeSlug: string
  type2: string
  age?: number
  price: number
}

const allWine: IWine[] = [
  {
    id: '1',
    name: 'Шато Пей Ля Тур "Резерв дю Шато" Бордо Супериор AOC',
    fullName:
      'Chateau Pey La Tour "Reserve du Chateau", Bordeaux Superieur AOC',
    country: 'Бордо, Франция',
    type: 'Красное',
    typeSlug: 'red',
    type2: 'Сухое',
    age: 2014,
    price: 254,
  },
  {
    id: '2',
    name: 'Альберт Бишо, Шабли AOC',
    fullName: 'Albert Bichot, Chablis AOC',
    country: 'Шабли, Бургундия, Франция',
    type: 'Белое',
    typeSlug: 'white',
    type2: 'Сухое',
    age: 2020,
    price: 100,
  },
  {
    id: '3',
    name: 'Анна де Кодорнью" Блан де Блан Ресерва DO',
    fullName: '"Anna de Codorniu" Blanc de Blancs Brut Reserva, Cava DO',
    country: 'Кава, Каталония, Испания',
    type: 'Игристое',
    typeSlug: 'sparkling',
    type2: 'Брют',
    price: 50,
  },
  {
    id: '4',
    name: '"Винья Сенца Номе" Москато д\'Асти DOCG',
    fullName: '"Vigna Senza Nome" Moscato d\'Asti DOCG',
    country: 'Асти, Пьемонт, Италия',
    type: 'Игристое',
    typeSlug: 'sparkling',
    type2: 'Сладкое',
    age: 2021,
    price: 399,
  },
]

export default allWine
