import React, { SetStateAction, useEffect, useState } from 'react'
import { IWineSelection } from '../../../App'

interface ISelectionCheckboxProps {
  title: string
  id: string
  setSelection: React.Dispatch<SetStateAction<IWineSelection>>
  selection: IWineSelection
}

const SelectionCheckbox = ({
  title,
  id,
  selection,
  setSelection,
}: ISelectionCheckboxProps) => {
  const [checkboxState, setCheckboxState] = useState(false)

  useEffect(() => {
    if (id === 'sparkling') {
      setSelection({ ...selection, [id]: checkboxState })
    } else {
      let colorList = [...selection.color]
      if (checkboxState) {
        colorList.push(title)
      } else {
        colorList = colorList.filter((color) => color !== title)
      }
      setSelection({ ...selection, color: colorList })
    }
  }, [checkboxState])

  return (
    <div className="selection">
      <label htmlFor={id} className="selector__title">
        {title}
      </label>
      <input
        type="checkbox"
        className="selector__checkbox"
        id={id}
        checked={checkboxState}
        onChange={(e) => setCheckboxState(e.target.checked)}
        data-filter={title}
      />
    </div>
  )
}

export default SelectionCheckbox
