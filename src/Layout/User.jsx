import React from "react";
import {useParams} from "react-router-dom";
import {userRoutes} from "../Routes";

const User = () => {

    const {path} = useParams();
    const [component, setComponent] = React.useState(null);

    React.useEffect(() => {
        if(path !== null){
            userRoutes.filter(
                (route) => {
                    if(route.path === path){
                        setComponent(route.component);
                    }
                    return null;
                })
        }
        if(component === null)
            setComponent(<div>Page Not Found</div>);
    },[]);


    return (
        <div>
            <div>
                User
            </div>
            <div>
                {/* Navbar */}
                {component}
            </div>

        </div>
    )
}

export default User;