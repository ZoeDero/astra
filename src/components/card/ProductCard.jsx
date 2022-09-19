import React from 'react';
import './card.scss';



const ProductCard = ({title, description}) => {
    return (
       
   <div className="card m-2 p-0 rounded-1 text-center ">
  <div className="card-body m-auto">
    <h5 className="card-title">DOOM 64</h5>
   
  </div>
  {title};
</div>
  
        
    );
};

export default ProductCard;