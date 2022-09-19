import React from 'react';

import { NavLink } from 'react-router-dom';
import ProductCard from '../../components/card/ProductCard';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import BarNav from '../../components/nav/BarNav';
import CategoryProduct from '../categoryProduct/CategoryProduct';
import './boutique.scss'



const Boutique = () => {
    return (
        <div className='d-flex'>
            
            <BarNav/>
        <div className='container-fluid d-flex flex-column p-5 w-75 justify-content-center'>
        <h1>Boutique</h1>
        <NavLink to='/categoryProduct'>
            <CategoryCard/>
        </NavLink>
        </div>
        </div>
    );
};

export default Boutique;