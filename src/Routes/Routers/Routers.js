import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses";
import Blog from "../../Pages/Blog/Blog";
import Faq from "../../Pages/FAQ/Faq";
import LognIn from "../../Pages/LognIn/LognIn";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/ErrorPage/ErrorPase";
import Details from "../../Pages/Details/Details";
import Chekout from "../../Pages/Chekout/Chekout";
import PrivetRouters from "../PrivetRouters/PrivetRouters";

export const router = createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/course',
            loader: ()=>fetch('https://b610-learning-platform-server-side-seven.vercel.app/courses'),
            element:<Courses></Courses>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/faq',
            element:<Faq></Faq>
        },
        {
            path:'/lognin',
            element:<LognIn></LognIn>
        },
        {
            path:'/Register',
            element:<Register></Register>
        },
        {
            path:'/details/:id',
            loader: ({params})=>fetch(`https://b610-learning-platform-server-side-seven.vercel.app/courses/${params.id}`),
            element:<Details></Details>
        },
        {
            path:'/chekout/:id',
            loader: ({params})=>fetch(`https://b610-learning-platform-server-side-seven.vercel.app/courses/${params.id}`),
            element:<PrivetRouters><Chekout></Chekout></PrivetRouters>
        },
       ] 
    }
])