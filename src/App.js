import './App.scss';
import HomeScreen from './pages/homeScreen/HomeScreen';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, {Suspense, useState, useEffect} from'react';
import BaseScreen from './pages/baseScreen/BaseScreen'
import OffCanvas from './components/nav/OffCanvas';



//authorisations a faire pour le offcanvas profil rapide et pour la page compte utilisateur


//CUSTOM POINTER
// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', e => {
//   cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
// })

// document.addEventListener('click', ()=>{
//   cursor.classList.add('expand');

//   setTimeout(()=>{
//     cursor.classList.remove('expand');
//   },500);
// })
//--------------

const Twitch = React.lazy(() => import("./pages/Twitch/Twitch"));
const Youtube = React.lazy(() => import("./pages/youtube/Youtube"));
// const Instagram = React.lazy(() => import("./pages/insta/Instagram"));
const Boutique= React.lazy(() => import("./pages/boutique/Boutique"));
const CategoryScreen= React.lazy(() => import("./pages/categoryScreen/CategoryScreen"));


function App() {


 
  


 
    
  return (
    <>
    
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen/>}>
    
          <Route index element={
            <Suspense >
              <HomeScreen/>

            </Suspense>
            
          }/>
          <Route path="/twitch" element={
              <Suspense >
              <Twitch/>
            </Suspense>
          }/>
           <Route path="/youtube" element={
              <Suspense >
              <Youtube/>
            </Suspense>
          }/>
            {/* <Route path="/instagram
            " element={
              <Suspense >
              <Instagram/>
            </Suspense>
          }/> */}
            <Route path="/boutique" element={
              <Suspense>
              <Boutique/>
            </Suspense>
          }/>
            <Route path="/articleByCategory" element={
              <Suspense>
              <CategoryScreen/>
            </Suspense>
          }/>
       
        <Route path="/login" element={
              <Suspense>
              <OffCanvas/>
            </Suspense>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>





 

  );
}

export default App;
