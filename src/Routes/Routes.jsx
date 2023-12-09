import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Login/Register/Register";
import AllJobs from "../Pages/Home/All Jobs/AllJobs";
import AppliedJobs from "../Pages/Home/Applied Jobs/AppliedJobs";
import MyJobs from "../Pages/Home/My Jobs/MyJobs";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "./ErrorPage";
import Slider from "../Pages/Slider/Slider";
import Details from "../Components/Details";
import AddJobs from "../Pages/Home/Add A Jobs/AddJobs";
import ViewDetails from "./ViewDetails";
import PrivetRoute from "../Route/PrivetRoute";
import Vdetails from "../Pages/Home/All Jobs/Vdetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('https://assignment-11-server-dun-two.vercel.app/addproducts'),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/appliedJobs",
        element: <PrivetRoute><AppliedJobs></AppliedJobs></PrivetRoute>,
      },
      {
        path: "addjobs",
        element: <PrivetRoute><AddJobs></AddJobs></PrivetRoute>,
      },
      {
        path: "/myJobs",
        element: <PrivetRoute><MyJobs></MyJobs></PrivetRoute>,
        loader : () => fetch('https://assignment-11-server-dun-two.vercel.app/addproducts'),

      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "slider",
        element: <Slider></Slider>,
      },
      {
        path: "/details",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://assignment-11-server-dun-two.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/vdetails",
        element: <Vdetails></Vdetails>,
        loader: ({ params }) =>
          fetch(`https://assignment-11-server-dun-two.vercel.app/jobs/${params.id}`),
      },
      {
        path: '/details/:id',
        element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-dun-two.vercel.app/addproducts/${params.id}`),
      }
    ],
  },
]);

export default router;
