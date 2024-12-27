import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Component/Home"
import Apply from "./Component/APPLY/Apply"
import Main from "./Component/Main"
// import Detail from "./Component/JOBS/Details"
import Details from "./Component/JOBS/Details"


function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:([
      {
        path:'/',
        element:<Home></Home>

      },
      
        {
          path:'Apply',
          loader:()=>fetch('https://next-level-two-ashen.vercel.app/jobs/'),
          element:<Apply></Apply>
        
      },
      {
      path:'/job/:id',
      loader:({params})=>fetch(`https://next-level-two-ashen.vercel.app/jobs/${params.id}`),
      element:<Details></Details>
      
      }
    ])
  }
  
 ])

  return (
  <RouterProvider router={router}></RouterProvider>
  )
}

export default App
