import React, { useState } from 'react';
import MenuCard from './MenuCard';
import Menuapi from "../Basics/Menuapi";

import Navbar from "../Basics/Navbar";

const Restaurant = () => {

const uniqueItems = [...new Set(Menuapi.map((curElem)=>{
    return  (curElem.Category);
})),"All"];
console.log(uniqueItems);

    const [menuItems, setMenuItems] = useState(Menuapi);
    const [menuCat,setMenuCat] = useState(uniqueItems);


    const filterItems = (Category) => {
        if(Category === "All"){
            setMenuItems(Menuapi);
            return;
        }
        else{
            const updatedList = Menuapi.filter((curElem) => {
                return curElem.Category === Category;
            });
            setMenuItems(updatedList);
        }
       
    }

    return (
        <>

            <Navbar filterItems = {filterItems} menuCat= {menuCat}/>

            <MenuCard menuItems={menuItems} />
        </>
    );
}

export default Restaurant