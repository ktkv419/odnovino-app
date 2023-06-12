import { useEffect, useState } from 'react'
import Navigation from './containers/Navigation/Navigations'
import Selector from './containers/Selector/Selector'
import allWine, { IWine } from './data/wine'
import WineList from './containers/WineList/WineList'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import WineCard from './containers/WineCard/WineCard'

export interface IWineSelection {
  // For name search
  // name?: string
  grapes: string[] | undefined
  country: string | undefined
  sparkling: string[] | undefined
  sparklingType?: string
  color: string[] | undefined | null
  sweetnessScale: number | undefined
  intensityScale: number | undefined
  bitternessScale: number | undefined
  tannins?: {
    name: string
    scale: number
  }
  price: { min: number; max: number } | undefined
}

const App = () => {
  const [selection, setSelection] = useState<IWineSelection>({
    grapes: undefined,
    country: undefined,
    sparkling: undefined,
    color: undefined,
    sweetnessScale: undefined,
    intensityScale: undefined,
    bitternessScale: undefined,
    price: undefined,
  })
  const [sortType, setSortType] = useState<string>('priceDown')
  const [shownWine, setShownWine] = useState<Array<IWine>>()

  useEffect(() => {
    setShownWine(
      allWine.filter((wine) => {
        if (
          selection.sparkling === undefined ||
          selection.sparkling.includes(wine.sparkling)
        )
          return true
        if (selection.sparkling === null) return false
      })
    )
  }, [selection])

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navigation />
          <Outlet />
        </>
      ),
      children: [
        {
          path: 'wine',
          element: (
            <>
              <Selector
                sortType={sortType}
                setSelection={setSelection}
                selection={selection}
                setSortType={setSortType}
              />
              {shownWine ? (
                <WineList wineList={shownWine} sortType={sortType} />
              ) : (
                ''
              )}
            </>
          ),
        },
        { path: 'wine/:id', element: <WineCard /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
