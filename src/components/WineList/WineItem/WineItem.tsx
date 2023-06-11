import { Link } from 'react-router-dom'
import { IWine } from '../../../data/wine'

interface IWineItemProps {
  wine: IWine
}

const WineItem = ({ wine }: IWineItemProps) => {
  return (
    <div className="wine-card">
      <h4 className="wine-card__title">{wine.name}</h4>
      <Link to={'wine'}>{wine.name}</Link>
      <p className="wine-card__type">{wine.type}</p>
      <p className="wine-card__country">{wine.country}</p>
      <p className="wine-card__price">{wine.price} руб.</p>
    </div>
  )
}

export default WineItem
