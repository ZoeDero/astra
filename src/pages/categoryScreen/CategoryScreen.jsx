import React, { useEffect } from 'react';
import './categoryScreen.scss';
import ProductCard from '../../components/card/ProductCard';
import CategoryCard from '../../components/categoryCard/CategoryCard';

const CategoryScreen = () => {

  useEffect(()=> {
    fetch('http://astra-api/article')
      .then(response => response.json())
      .then(content => console.log(content));
  },[])

    return (
        <div className='d-flex justify-content-center'>
   
              
          <div  className='d-flex flex-column justify-content-center align-items-center'>
            <h1>{CategoryCard?.title}</h1>
          <ProductCard/>
      
          </div>
        </div>
      
    );
};

export default CategoryScreen;


//.MAP pour touts les produits pour transformer le json 