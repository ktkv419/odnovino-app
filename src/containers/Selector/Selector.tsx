import React, { SetStateAction } from 'react'
import { IWineSelection } from '../../App'
import './Selector.scss'

interface ISelectorProps {
  selection: IWineSelection
  sortType: string
  setSelection: React.Dispatch<SetStateAction<IWineSelection>>
  setSortType: React.Dispatch<SetStateAction<string>>
}

const Selector = ({
  setSelection,
  selection,
  setSortType,
  sortType,
}: ISelectorProps) => {
  const onAttributeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection({ ...selection, type: e.target.value })
  }

  const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value)
  }

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelection({ ...selection, maxPrice: +e.target.value })
  }

  return (
    <div className="selector">
      <div className="attribute">
        <label htmlFor="type" className="attribute__label">
          Тип
        </label>
        <select
          name="attribute__selector"
          id="type"
          onChange={(e) => onAttributeChange(e)}
          value={selection.type}
        >
          <option value="any">Любое</option>
          <option value="red">Красное</option>
          <option value="white">Белое</option>
          <option value="sparkling">Игристое</option>
        </select>
      </div>
      <div className="attribute">
        <label htmlFor="type" className="attribute__label">
          Сортировка
        </label>
        <select
          name="attribute__selector"
          id="sortType"
          value={sortType}
          onChange={(e) => onSortChange(e)}
        >
          <option value="priceUp">Цена по возрастанию</option>
          <option value="priceDown">Цена по убыванию</option>
        </select>
      </div>
      <div className="attribute">
        <label htmlFor="price" className="attribute__label">
          Цена{selection ? ` ${selection.maxPrice}` : ''}
        </label>
        <input
          type="range"
          min={1}
          max={1000}
          value={selection.maxPrice}
          className="attribute__slider"
          id="priceo"
          onChange={(e) => onPriceChange(e)}
        />
      </div>
    </div>
  )
}

export default Selector
