import React from 'react'
import { useState } from 'react'
// import img1 from "../images/Noodle.jpeg";
import "./styles.css"

const MenuCard = ({ menuItems }) => {
    const [addItem, setAddItem] = useState(0);
    const addToCart = () => {
        addItem = addItem + 1;
    return;
}
    return (
        <div>

            {menuItems.map((menuItem) => {
                const { id, image, name, Category, description } = menuItem;
                return (
                    <div className='cards mb-3'>
                        <div style={{ paddingTop: "200px", paddingLeft: "100px" }}>
                            <div className='card-container' key={id}>
                                <div className='card' >
                                    <div className='card-body'>

                                        <div><span className='card-author subtle'>{Category}</span></div>

                                        <h2 className='card-title'>{name}</h2>
                                        <span className='card-description subtle'>
                                            {description}
                                        </span>
                                        {/* <div className='card-read'>Read</div> */}

                                    </div>
                                    <img src={image} alt="images" className='card-img-top ' />


                                </div>

                            </div>
                            <button className='btn' style={{ backgroundColor: "#FED049", marginTop: "20px" }} >Add to Cart</button>
                        </div>
                    </div>
                );
            })}
        </div>

    );

}
export default MenuCard;