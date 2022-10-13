import React from 'react';
import './card.scss';



const ProductCard = ({title, description}) => {
    return (
       
   <div className="card m-2 p-0 rounded-1 text-center ">
  <div className="card-body m-auto">
    <h5 className="card-title">{title}</h5>
   
  </div>
  {description}
</div>
  
        
    );
};

export default ProductCard;