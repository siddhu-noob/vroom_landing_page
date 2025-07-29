import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Policy from "./Components/Policy";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpage />,
    },
    {
      path: "/privacy",
      element: <Policy/>,
    },
  ])

  

  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
