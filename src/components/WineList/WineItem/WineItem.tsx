import { Link } from 'react-router-dom'
import { IWine } from '../../../data/wine'
import './WineItem.scss'

interface IWineItemProps {
  wine: IWine
}

const WineItem = ({ wine }: IWineItemProps) => {
  return (
    <div className="wine-item">
      <Link to={`/wine/${wine.id}`} className="wine-item__title">
        {wine.name}
      </Link>
      {wine.sparkling ? (
        <div className="wine-item__item">
          <div className="wine-item__sparkling">Игристое</div>
        </div>
      ) : (
        ''
      )}
      <div className="wine-item__item">
        <p className="wine-item__label">Плоды</p>
        <ul className="wine-item__grapes">
          {wine.grapes.map((grape) => (
            <li className="wine-item__grape" key={grape}>
              {grape}
            </li>
          ))}
        </ul>
      </div>
      <p>{wine.sweetness.scale}</p>
      <div className="wine-item__item">
        <p className="wine-item__label">Страна</p>
        <p className="wine-item__country">{wine.location.country}</p>
      </div>
      <div className="wine-item__item">
        <p className="wine-item__label">Тип</p>
        <p className="wine-item__color">{wine.color}</p>
      </div>
      <div className="wine-item__item">
        <p className="wine-item__label">Объем</p>
        <p className="wine-item__volume">{wine.volume} мл.</p>
      </div>
      <div className="wine-item__item">
        <p className="wine-item__label">Цена</p>
        <p className="wine-item__price">{wine.price} руб.</p>
      </div>
    </div>
  )
}

export default WineItem
