import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/Home'
import FilePage from '../pages/FilePage/Page'
import NotFoundPage from '../pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: 'FilePage/:name', Component: lazy(() => import('../pages/FilePage/Page')) },
  { path: '*', element: <NotFoundPage /> },
])

export default router

// ---------------------- 分割线 ---------------

export const HOME_PATHNAME = '/'
export const FILE_PAGE_PATH = 'FilePage/'
