import './App.scss';
import HomeScreen from './pages/homeScreen/HomeScreen';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React, {Suspense, useState} from'react';
import BaseScreen from './pages/baseScreen/BaseScreen'


const Twitch = React.lazy(() => import("./pages/Twitch/Twitch"));
const Youtube = React.lazy(() => import("./pages/youtube/Youtube"));
const Instagram = React.lazy(() => import("./pages/insta/Instagram"));
const Boutique= React.lazy(() => import("./pages/boutique/Boutique"));
const CategoryScreen= React.lazy(() => import("./pages/categoryScreen/CategoryScreen"));


function App() {
 
  const[color, setColor]=useState(true);


 
    
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen/>}>
          <Route index element={
            <Suspense fallback={<span>chargement</span>}>
              <HomeScreen/>

            </Suspense>
            
          }/>
          <Route path="/twitch" element={
              <Suspense fallback={<span>chargement</span>}>
              <Twitch/>
            </Suspense>
          }/>
           <Route path="/youtube" element={
              <Suspense fallback={<span>chargement</span>}>
              <Youtube/>
            </Suspense>
          }/>
            <Route path="/instagram" element={
              <Suspense fallback={<span>chargement</span>}>
              <Instagram/>
            </Suspense>
          }/>
            <Route path="/boutique" element={
              <Suspense fallback={<span>chargement</span>}>
              <Boutique/>
            </Suspense>
          }/>
            <Route path="/category/:categoryName" element={
              <Suspense fallback={<span>chargement</span>}>
              <CategoryScreen/>
            </Suspense>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>







  //  <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<HomeScreen />}/>
  //     <Route path='/' element={<BaseScreen />}/>
  //         <Route path='/twitch' element={
  //           // <Suspense fallback={<h1>Loading</h1>}>
  //             <Twitch />
  //           // </Suspense>
  //         } />
  //     <Route path='/youtube' element={<Youtube onClick={()=>setColor(color='white')} />}/>
  //     <Route path='/insta' element={<Instagram/>}/>
  //     <Route path='/boutique' element={<Boutique/>}/>
  //     <Route path='*' element={<HomeScreen/>}/>
  //     <Route path='/categoryProduct' element={<CategoryProduct/>} />
  //     <Route path='/categoryProduct/productCard' element={<ProductCard/>} />
  //   </Routes>
  //  </BrowserRouter>


  );
}

export default App;
