import { Link } from 'react-router-dom'
import { IWine } from '../../data/wine'

interface IWineCardProps {
  wine?: IWine
}

const WineCard = ({ wine }: IWineCardProps) => {
  return (
    <>
      <h5>Wine Card</h5>
      <Link to={'/'}>Back</Link>
    </>
    // <div className="wine-card">
    //   <h4 className="wine-card__title">{wine.name}</h4>
    //   <p className="wine-card__type">{wine.type}</p>
    //   <p className="wine-card__country">{wine.country}</p>
    //   <p className="wine-card__price">{wine.price}</p>
    // </div>
  )
}

export default WineCard
