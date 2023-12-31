// Сладость слайдер имеет Сладкое, Полуладкое, Полусухое, сухое
import { SetStateAction } from 'react'
import { IWineSelection } from '../../App'
import SelectionCheckbox from './Selection/SelectionCheckbox'
import SelectionRange from './Selection/SelectionRange'
import './Selector.scss'

interface ISelectorProps {
  selection: IWineSelection
  sortType: string
  setSelection: React.Dispatch<SetStateAction<IWineSelection>>
  setSortType: React.Dispatch<SetStateAction<string>>
}

const Selector = ({ setSelection, selection }: ISelectorProps) => {
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelection({ ...selection, name: e.target.value })
  }

  return (
    <div className="selectors">
      <div className="selector selector--name">
        <label htmlFor="name" className="selector__title">
          Название
        </label>
        <input
          type="text"
          id="name"
          className="selector__text"
          value={selection.name}
          onChange={onNameChange}
        />
      </div>
      <div className="selector selector--sparkling">
        <SelectionCheckbox
          id="sparkling"
          title="Игристое"
          setSelection={setSelection}
          selection={selection}
        />
      </div>

      <div className="selector selector--color">
        <SelectionCheckbox
          id="red"
          title="Красное"
          setSelection={setSelection}
          selection={selection}
        />
        <SelectionCheckbox
          id="orange"
          title="Оранжевое"
          setSelection={setSelection}
          selection={selection}
        />
        <SelectionCheckbox
          id="white"
          title="Белое"
          setSelection={setSelection}
          selection={selection}
        />
        <SelectionCheckbox
          id="rose"
          title="Розовое"
          setSelection={setSelection}
          selection={selection}
        />
      </div>

      <div className="selector selector--taste">
        {selection.color.includes('Красное') ? (
          <SelectionRange
            title="Танинность"
            id="tannins"
            selection={selection}
            setSelection={setSelection}
          />
        ) : (
          ''
        )}

        <SelectionRange
          id="sweetness"
          selection={selection}
          setSelection={setSelection}
          title="Сладость"
        />
        <SelectionRange
          title="Насыщенность"
          id="intensity"
          selection={selection}
          setSelection={setSelection}
        />
        <SelectionRange
          id="bitterness"
          title="Кислотность"
          selection={selection}
          setSelection={setSelection}
        />
      </div>
      <div className="selector selector--tags">
        <SelectionCheckbox
          id="extract"
          title="Выдержанное"
          selection={selection}
          setSelection={setSelection}
        />
      </div>
    </div>
  )
}

export default Selector
