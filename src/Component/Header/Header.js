import React from 'react';
import { NavLink } from "react-router-dom";
const Header = ({ header }) => {
    const { category_name, category_id } = header;
    // console.log(header);
    return (
        <div>
            <hr />
            <nav className='flex flex-col lg:flex-row  justify-center items-center gap-5 m-1'>
                <NavLink className={({ isActive }) => isActive ? 'text-blue-900 font-extrabold ml-5 text-3xl' : 'decoration-solid ml-5 text-3xl'} to={`/breaking/${category_id}`} > {category_name}</NavLink>
            </nav>
            <hr />
        </div>
    );
};

export default Header;