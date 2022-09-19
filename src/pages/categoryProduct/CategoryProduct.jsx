import React from 'react';
import BarNav from '../../components/nav/BarNav';
import './categoryProduct.scss';
import ProductCard from '../../components/card/ProductCard';

const CategoryProduct = () => {
    return (
        <div className=''>
          <BarNav/>
              
          <div  className='d-flex flex-column justify-content-center align-items-center'>
            <h1>First Person Shooters</h1>
          <ProductCard/>
       
          </div>
        </div>
      
    );
};

export default CategoryProduct;