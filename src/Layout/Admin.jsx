import React from "react";
import {useParams} from "react-router-dom";

// components
import {adminRoutes} from "../Routes";
import AdminSidebar from "../Components/Admin/Sidebar";

const Admin = () => {

    const {path} = useParams();
    const [component, setComponent] = React.useState(null);

    React.useEffect(() => {
        if(path !== null || path !== undefined){
            adminRoutes.filter(
                (route) => {
                    if(route.path === path){
                        setComponent(route.component);
                    }
            })
        }
        else{
            setComponent(<div>Page Not Found</div>);
        }
    },[path]);

    return (
        <div className="flex">
            <div className="">
                <AdminSidebar />
            </div>
            <div className="px-5 py-3 flex-1 bg-gradient-to-b from-[#1865d8] to-[#09c699]">
                {/* Navbar */}
                {/* Admin */}
                {component}
            </div>

        </div>
    )
}

export default Admin;