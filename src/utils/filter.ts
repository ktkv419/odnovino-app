import { IWineSelection } from '../App'
import { IWine } from '../data/wine'

const filterWine = (allWine: Array<IWine>, selection: IWineSelection) => {
  return allWine.filter((wine) => {
    let boolean = false

    if (selection.name === undefined || wine.name.includes(selection.name)) {
      if (
        !selection.sparkling ||
        (wine.sparkling === selection.sparkling) === true
      ) {
        if (
          selection.color.length === 0 ||
          selection.color.includes(wine.color)
        ) {
          if (
            !selection.color.includes('Красное') ||
            selection.tannins === undefined ||
            selection.tannins === wine.tannins?.scale
          ) {
            if (
              selection.sweetness === undefined ||
              selection.sweetness === wine.sweetness.scale
            ) {
              if (
                selection.intensity === undefined ||
                selection.intensity === wine.intensity.scale
              ) {
                if (
                  selection.bitterness === undefined ||
                  selection.bitterness === wine.bitterness.scale
                ) {
                  if (!selection.extract || selection.extract === wine.extract)
                    boolean = true
                }
              }
            }
          }
        }
      }
    } else {
      boolean = false
    }

    return boolean
  })
}

export default filterWine
