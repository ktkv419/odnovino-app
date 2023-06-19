import { useEffect, useState } from 'react'
import Navigation from './containers/Navigation/Navigations'
import Selector from './containers/Selector/Selector'
import allWine, { IWine } from './data/wine'
import WineList from './containers/WineList/WineList'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import WineCard from './containers/WineCard/WineCard'
import filterWine from './utils/filter'

export interface IWineSelection {
  // For name search
  name: string | undefined
  grapes: string[] | undefined
  location:
    | {
        region?: string
        country: string
      }
    | undefined
  sparkling: boolean
  sparklingType?: string
  color: string[]
  sweetness: number | undefined
  intensity: number | undefined
  bitterness: number | undefined
  tannins: number | undefined
  extract: boolean
  price: { min: number; max: number } | undefined
}

const App = () => {
  const [selection, setSelection] = useState<IWineSelection>({
    name: undefined,
    grapes: undefined,
    location: undefined,
    sparkling: false,
    color: [],
    sweetness: undefined,
    intensity: undefined,
    bitterness: undefined,
    tannins: undefined,
    extract: false,
    price: undefined,
  })
  const [sortType, setSortType] = useState<string>('priceDown')
  const [shownWine, setShownWine] = useState<Array<IWine>>()

  useEffect(() => {
    setShownWine(filterWine(allWine, selection))
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
