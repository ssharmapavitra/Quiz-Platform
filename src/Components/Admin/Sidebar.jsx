import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

// Components :
import {adminRoutes} from "../../Routes";
import {Link} from "react-router-dom";

const AdminSidebar = () => {

    const [ open, setOpen ] = React.useState(true);
    const { collapseSidebar } = useProSidebar();

    return (
         <div style={{ height: '100vh', borderRight:"0.5px solid gray"}} >
        <Sidebar className="bg-gray-100" style={{height:"100vh", overflowY:"hidden"}} onMouseEnter={()=> {
            if(open === false) {
                collapseSidebar();
                setOpen(true);
            }}}
            onMouseLeave = {()=>{
                if(open === true) {
                    collapseSidebar();
                    setOpen(false);
                }
            }}
        >
            <Menu className="pt-5">
                {adminRoutes.map((route, index) => {
                    return (
                        <MenuItem key={index} className='my-0 mx-auto py-0 hover:text-red-600 hover:bg-gray-700'><Link to={route.route}><p className="flex items-center my-0 py-9"> <span className={`${!open && "mx-auto"}`} title={!open && route.name}>{route.icon}</span> {open && route.name}</p></Link> </MenuItem>
                    )
                })}
            </Menu>
        </Sidebar>
    </div>
)
}

export default AdminSidebar;