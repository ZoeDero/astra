import React from 'react';
import './categoryCard.scss'

const CategoryCard = ({title}) => {
    return (
      
           
<div id="categoryCard" className=' p-0 border rounded-1'>
  <div >
    <div className='w-100'>
        <h5 className="card-title text-decoration-none text-light">{title}</h5>
        
        
    </div>
    
  </div>
</div>

        

        
    );
};

export default CategoryCard;