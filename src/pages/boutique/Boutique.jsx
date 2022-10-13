import React from 'react';

import { NavLink } from 'react-router-dom';
import CategoryCard from '../../components/categoryCard/CategoryCard';


import './boutique.scss'


const Boutique = () => {
    return (
        <div className='d-flex body-boutique'>
            
         
        <div className='container-fluid d-flex flex-column p-5 w-75 justify-content-center'>
        <h1>Boutique</h1>
        <NavLink to="/category/cat1"><CategoryCard/></NavLink>
        </div>
        </div>
    );
};

export default Boutique;