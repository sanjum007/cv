import React from 'react'
import logo from "../images/reclogo.webp";
const Navbar = ({ filterItems, menuCat }) => {
    return (
        <nav className="navbar navbar-light" style={{backgroundColor:"#FFD966"}} >
            <img className="menulogo" src={logo} alt="logo" />
            <div className='btn-group btn' >
                {menuCat.map((curElem) => {
                    return (
                        <div >
                            <button className="btn-group__items btn btn-outline-dark" style={{backgroundColor:"#",marginLeft:"20px"}}  onClick={() => filterItems(curElem)}>{curElem}</button>
                        </div>

                    )

                })}

                
            </div>
            {/* <button className='btn' style={{backgroundColor:"#F8F988",marginRight:"70px"}}>Login</button> */}
        </nav>
    )
}

export default Navbar