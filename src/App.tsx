import { useEffect, useState } from 'react'
import Navigation from './containers/Navigation/Navigations'
import Selector from './containers/Selector/Selector'
import allWine, { IWine } from './data/wine'
import WineList from './containers/WineList/WineList'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import WineCard from './containers/WineCard/WineCard'

export interface IWineSelection {
  type: string
  maxPrice: number
}

const App = () => {
  const [selection, setSelection] = useState<IWineSelection>({
    type: 'any',
    maxPrice: 1000,
  })
  const [sortType, setSortType] = useState<string>('priceDown')
  const [shownWine, setShownWine] = useState<Array<IWine>>()

  useEffect(() => {
    setShownWine(
      allWine.filter(
        (wine) =>
          (selection.type === 'any' || wine.typeSlug === selection.type) &&
          wine.price <= selection.maxPrice
      )
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
          index: true,
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
        { path: '/wine', element: <WineCard /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
