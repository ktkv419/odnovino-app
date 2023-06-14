// Сладость слайдер имеет Сладкое, Полуладкое, Полусухое, сухое
import React, { SetStateAction, useEffect, useState } from 'react'
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
  const [type, setSparkling] = useState({
    sparkling:
      selection.sparkling === true || selection.sparkling === undefined,
    silent: selection.sparkling === false || selection.sparkling === undefined,
  })

  useEffect(() => {
    const newSelection = { ...selection }
    const { silent, sparkling } = type
    newSelection.sparkling =
      silent && sparkling ? undefined : silent ? false : sparkling ? true : null
    setSelection(newSelection)
  }, [type])

  // const onSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSortType(e.target.value)
  // }

  // const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelection({ ...selection, maxPrice: +e.target.value })
  // }

  useEffect(() => {}, [])

  return (
    <div className="selector">
      <div className="attribute sparkling">
        <label htmlFor="sparkling" className="sparkling__title">
          Игристое
        </label>
        <input
          type="checkbox"
          className="sparkling__checkbox"
          id="sparkling"
          checked={type.sparkling}
          onChange={(e) =>
            setSparkling({ ...type, sparkling: e.target.checked })
          }
        />
        <label htmlFor="sparkling" className="sparkling__title">
          Тихое
        </label>
        <input
          type="checkbox"
          className="sparkling__checkbox"
          checked={type.silent}
          id="silent"
          onChange={(e) => setSparkling({ ...type, silent: e.target.checked })}
        />
      </div>

      {/* <div className="attribute sparkling">
        <label htmlFor="type" className="attribute__label">
          Газики-хуязики
        </label>
        <select
          name="attribute__selector"
          id="type"
          // onChange={(e) => onGasChange(e)}
          // value={selection.type}
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
      <div className="attribute price"> */}
      {/* <label htmlFor="price" className="attribute__label">
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
        /> */}
      {/* <div className="field">
          <span>Min</span>
          <input type="number" className="input-min" value="2500" />
        </div>
        <div className="separator">-</div>
        <div className="field">
          <span>Max</span>
          <input type="number" className="input-max" value="7500" />
        </div>
        <div className="slider">
          <div className="progress"></div>
        </div>
        <div className="range-input">
          <input type="range" className="range-min" min="0" max={10000} />
          <input type="range" className="range-max" min="0" max={10000} />
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default Selector
