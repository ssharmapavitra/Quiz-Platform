// Admin Pages
import AdminLogin from "./Pages/Admin/Login.jsx";
import UserLogin from "./Pages/User/Login";

// User Pages

// Icons
import {IoMdAdd,IoMdLogIn} from "react-icons/io";
import {VscGraph} from "react-icons/vsc";
import Dashboard from "./Pages/Admin/Dashboard";

// Admin routes
export const adminRoutes = [
    {
        path:"dashboard",
        component:<Dashboard/>,
        icon:<VscGraph className="text-xl mr-2 hover:text-red-600"/>,
        showInMenu: true,
        route:"/admin/dashboard",
        name:"Dashboard"
    },
    {
        path:"login",
        component: <AdminLogin/>,
        icon:<IoMdLogIn className="text-xl mr-2 hover:text-red-600"/>,
        showInMenu:false,
        route: "",
        name : "Admin Login",
    },
    {
        path:"addQuiz",
        component: <AdminLogin/>,
        icon:<IoMdAdd className="text-xl mr-2 hover:text-red-600"/>,
        showInMenu:true,
        route: "/admin/addQuiz",
        name : "Add Quiz",
    }
]


// User Routes
export const userRoutes = [
    {
        path:"login",
        component : <UserLogin/>,
        icon:"",
        showInMenu : false,
    }
]