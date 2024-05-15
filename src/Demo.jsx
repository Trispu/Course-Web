import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home";
import CourseManagement from "./pages/course/courseManagement";




function Demo() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/> ,
    },
    {
      path: "/cou",
      element:<CourseManagement/> ,
    },
  ]);
  return <RouterProvider router={router} />
}

export default Demo
