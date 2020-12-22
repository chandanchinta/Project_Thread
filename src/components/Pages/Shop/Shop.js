import React from 'react';
import Shirt1 from "D:/React_app/project-thread/src/components/Pages/Shop/Images/Shirt1.jpg";
import Shirt2 from "D:/React_app/project-thread/src/components/Pages/Shop/Images/Shirt2.jfif";
import Shirt3 from "D:/React_app/project-thread/src/components/Pages/Shop/Images/Shirt3.jpg";
import './Shop.css';
import Productinfo from './data';

const Products = () => {
  return (
    <>
      <div className='Product-container'>
      <h1>Lets Shop bois</h1>
        <div className='Product-Wrapper'>
        {Productinfo.map((product, index) => {
          return (
            <div key={index} className='Product-Card'>
              <img src={product.img} className='Product-Image'/>
              <div className='ProductInfo'> 
                <div className='ProductTitle'>{product.name}</div>
                <div className='ProductDesc'>{product.desc}</div>
                <div className='ProductPrice'>{product.price}</div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Products;