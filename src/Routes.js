// Admin Pages
import AdminLogin from "./Pages/Admin/Login.jsx";
import UserLogin from "./Pages/User/Login";

// User Pages

// Admin routes
export const adminRoutes = [
    {
        path:"login",
        component: <AdminLogin/>
    }
]


// User Routes
export const userRoutes = [
    {
        path:"login",
        component : <UserLogin/>
    }
]