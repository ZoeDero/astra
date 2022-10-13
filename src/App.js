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





//CUSTOM POINTER
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', ()=>{
  cursor.classList.add('expand');

  setTimeout(()=>{
    cursor.classList.remove('expand');
  },500);
})
//--------------

const Twitch = React.lazy(() => import("./pages/Twitch/Twitch"));
const Youtube = React.lazy(() => import("./pages/youtube/Youtube"));
const Instagram = React.lazy(() => import("./pages/insta/Instagram"));
const Boutique= React.lazy(() => import("./pages/boutique/Boutique"));
const CategoryScreen= React.lazy(() => import("./pages/categoryScreen/CategoryScreen"));


function App() {

  const [text, setText] =useState("");
    useEffect(()=> {
      fetch('http://astra-api/')
        .then(response => response.text())
        .then(content => setText(content));
    },[])
 
  const[color, setColor]=useState(true);


 
    
  return (
    <>
    <div className='App'>
      {text}
    </div>
    
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
            <Route path="/category/:categoryName" element={
              <Suspense>
              <CategoryScreen/>
            </Suspense>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>





 

  );
}

export default App;
