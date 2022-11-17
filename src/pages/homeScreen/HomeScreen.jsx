import React from 'react';


import './homeScreen.scss';

const HomeScreen = () => {
    return (
      <>
      
     
    
        <div className='logo'>
           <img src="../img/logoAstra.png" alt="" id='logo_home'/> 
        </div>
        <div className="presentation_text">
          <p>Bienvenue !<br/>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        
        
        </>
    );
};

export default HomeScreen;