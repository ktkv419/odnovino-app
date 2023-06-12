import { useParams } from 'react-router-dom'
import Error from '../../components/Error/Error'
import allWine, { IWine } from '../../data/wine'
import './WineCard.scss'

const WineCard = () => {
  const params = useParams()

  const foundWine = allWine.find((wine: IWine) => wine.id === params.id)

  if (!foundWine) {
    return <Error msg={'Такого вина не существует'} />
  }

  return (
    <div className="wine-card">
      <h4 className="wine-card__title">{foundWine.name}</h4>
      <p className="wine-card__type">{foundWine.type}</p>
      <p className="wine-card__country">{foundWine.country}</p>
      <p className="wine-card__price">{foundWine.price}</p>
      <img className="wine-card__preview" src={`/${foundWine.id}.jpg`}></img>
    </div>
  )
}

export default WineCard
