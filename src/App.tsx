import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
import 'antd/dist/reset.css'
import { Spin } from 'antd'

function App() {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <RouterProvider router={routerConfig}></RouterProvider>
    </Suspense>
  )
}

export default App
