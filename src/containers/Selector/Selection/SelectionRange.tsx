import React, { SetStateAction, useEffect, useState } from 'react'
import { IWineSelection } from '../../../App'

interface ISelectionRangeProps {
  setSelection: React.Dispatch<SetStateAction<IWineSelection>>
  selection: IWineSelection
  title: string
  id: 'sweetness' | 'tannins' | 'bitterness' | 'intensity'
}

const SelectionRange = ({
  id,
  setSelection,
  selection,
  title,
}: ISelectionRangeProps) => {
  const [checkboxState, setCheckboxState] = useState(false)
  const [rangeState, setRangeState] = useState(0)

  useEffect(() => {
    const newSelection = { ...selection }
    if (checkboxState) {
      setSelection({ ...newSelection, [id]: rangeState })
    } else {
      setSelection({ ...newSelection, [id]: undefined })
    }
  }, [checkboxState, rangeState])

  return (
    <div className="selection">
      <label htmlFor={id}>{title}</label>
      <input
        type="checkbox"
        id={id}
        checked={checkboxState}
        onChange={(e) => setCheckboxState(e.target.checked)}
      />
      {checkboxState ? (
        <input
          type="range"
          id="sweetness-range"
          min={0}
          max={5}
          step={1}
          value={rangeState}
          onChange={(e) => setRangeState(+e.target.value)}
        />
      ) : (
        ''
      )}
    </div>
  )
  //   return (
  // )
}

export default SelectionRange
