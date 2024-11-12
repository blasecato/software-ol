/* eslint-disable @typescript-eslint/no-explicit-any */

import PrivateRoute from './pages/private/PrivateRoute'
import { RouterProvider } from 'react-router-dom'
import { useAppSelector } from './services/_common/hooks';
import PublicRoute from './pages/public/PublicRoute';
import { useEffect, useState } from 'react';
import { getToken } from './services/_common/api';
import Loader from './components/loader/Loader';
import { MenuProvider } from './context/menuContext';

function Router() {
  const { authentication, isAuthenticated } = useAppSelector(({ auth }) => auth);
  const [isAuth, setAuthenticated] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
    const token: any = getToken()
    if (token.user !== undefined || isAuthenticated) {
      setAuthenticated(true)
      return
    }
  }, [authentication, isAuthenticated])

  return (
    <>
      {(authentication.loading === 'loading' || isLoading) ?
        <Loader /> :
        <>
          {isAuth ?
            <MenuProvider>
              <RouterProvider router={PrivateRoute} />
            </MenuProvider>
            :
            <RouterProvider router={PublicRoute} />
          }
        </>
      }
    </>
  )
}

export default Router
