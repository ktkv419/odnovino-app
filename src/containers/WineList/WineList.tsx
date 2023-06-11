import { IWine } from '../../data/wine'
import WineItem from '../../components/WineList/WineItem/WineItem'

interface IWineListProps {
  wineList: IWine[]
  sortType: string
}

const WineList = ({ wineList, sortType }: IWineListProps) => {
  const sortedWineList =
    sortType === 'priceDown'
      ? [...wineList].sort((a, b) => b.price - a.price)
      : sortType === 'priceUp'
      ? [...wineList].sort((a, b) => a.price - b.price)
      : wineList
  const renderedWines = sortedWineList.map((wine) => (
    <WineItem key={wine.id} wine={wine} />
  ))

  return <div className="wine-list">{renderedWines}</div>
}

export default WineList
