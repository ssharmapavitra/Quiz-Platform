import React from "react";
import {useParams} from "react-router-dom";

// components
import {adminRoutes} from "../Routes";

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
            return null;
        }
        if(component === null)
            setComponent(<div>Page Not Found</div>);
    },[]);

    return (
        <div>
            <div>
                Admin
            </div>
            <div>
                {/* Navbar */}
                {component}
            </div>

        </div>
    )
}

export default Admin;