import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home";
import CourseManagement from "./pages/course/courseManagement";
import Layout from "./pages/layout";




function Demo() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/> ,
      children: [
        {
          path: "/",
          element:<HomePage/> ,
        },
        {
          path: "/cou",
          element:<CourseManagement/> ,
        },
      ]
      ,
    },
    
  ]);
  return <RouterProvider router={router} />
}

export default Demo
