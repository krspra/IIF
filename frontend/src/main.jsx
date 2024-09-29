import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LandingPage from './LandingPage/LandingPage.jsx'
import Event from './Event/Event.jsx'

const router=createBrowserRouter([
  {
    path:'',
    element:<App/>,
    children:[
      {
        path:'',
        element:<LandingPage/>,
      },
      {
        path:'event',
        element:<Event/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
