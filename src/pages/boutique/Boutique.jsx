import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import ProductCard from '../../components/card/ProductCard'

import './boutique.scss'


const Boutique = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
      fetch("http://astra-api/article", {
        method: "GET",
      })
        .then((resp) => resp.json())
        .then((json) => {
          setArticles(json);
        });
    }, []);
  
    console.log(articles);


    return (
        <>
        <h1>Boutique</h1>
        <div className='container-fluid cont-cat d-flex  '>
            
         
        <div className='container d-flex flex-column   justify-content-center'>
        <NavLink to="/articleByCategory"><CategoryCard title="Mugs" /></NavLink>
        </div>

        <div className='container d-flex flex-column   justify-content-center'>
        <NavLink to="/category/sweats"><CategoryCard title="Sweats"/></NavLink>
        </div>

        <div className='container d-flex flex-column   justify-content-center'>
        <NavLink to="/category/tops"><CategoryCard title="tops"/></NavLink>
        </div>

        <div className='container d-flex flex-column   justify-content-center'>
        <NavLink to="/category/vip"><CategoryCard title="Boutique VIP"/></NavLink>
        </div>
        </div>
        </>
    );
};

export default Boutique;