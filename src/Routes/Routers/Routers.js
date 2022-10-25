import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses";
import Blog from "../../Pages/Blog/Blog";
import Faq from "../../Pages/FAQ/Faq";
import LognIn from "../../Pages/LognIn/LognIn";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/ErrorPage/ErrorPase";
import CourseName from "../../Sheards/CourseName/CourseName";
import CouresDetails from "../../Sheards/CourseDetails/CouresDetails";
import Header from "../../Sheards/Header/Header";
import Details from "../../Pages/Details/Details";

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
            loader: ()=>fetch('http://localhost:5000/courses'),
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
            loader: ({params})=>fetch(`http://localhost:5000/courses/${params.id}`),
            element:<Details></Details>
        }
        
       ] 
    }
])