import React from 'react';
import BarNav from '../../components/nav/BarNav';
import './categoryScreen.scss';
import ProductCard from '../../components/card/ProductCard';

const CategoryScreen = () => {
    return (
        <div className=''>
   
              
          <div  className='d-flex flex-column justify-content-center align-items-center'>
            <h1>First Person Shooters</h1>
          <ProductCard/>
      
          </div>
        </div>
      
    );
};

export default CategoryScreen;


//.MAP pour touts les produits pour transformer le json 