import { IWineSelection } from '../App'
import { IWine } from '../data/wine'

const filterWine = (allWine: Array<IWine>, selection: IWineSelection) => {
  return allWine.filter((wine) => {
    let boolean = false

    boolean = selection.name
      ? wine.name.includes(selection.name)
        ? true
        : false
      : true
    if (!boolean) return false
    boolean = !selection.sparkling
      ? true
      : selection.sparkling && wine.sparkling
      ? true
      : false
    if (!boolean) return false
    boolean =
      selection.color.length === 0
        ? true
        : selection.color.includes(wine.color)
        ? true
        : false
    if (!boolean) return false
    boolean =
      selection.sweetness !== undefined
        ? selection.sweetness === wine.sweetness.scale
          ? true
          : false
        : true

    return boolean
  })
}

export default filterWine
