import './App.scss';
import HomeScreen from './pages/homeScreen/HomeScreen';
import 'bootstrap/dist/css/bootstrap.css';

import Boutique from './pages/boutique/Boutique';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Twitch from './pages/Twitch/Twitch';
import Youtube from './pages/youtube/Youtube';
import Instagram from './pages/insta/Instagram';
import CategoryProduct from './pages/categoryProduct/CategoryProduct';
import ProductCard from './components/card/ProductCard';
import {useState} from'react';
import BaseScreen from './pages/baseScreen/BaseScreen';



function App() {
 
  const[color, setColor]=useState(true);


 
    
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen />}/>
      <Route path='/' element={<BaseScreen />}/>
          <Route path='/twitch' element={
            // <Suspense fallback={<h1>Loading</h1>}>
              <Twitch />
            // </Suspense>
          } />
      <Route path='/youtube' element={<Youtube onClick={()=>setColor(color='white')} />}/>
      <Route path='/insta' element={<Instagram/>}/>
      <Route path='/boutique' element={<Boutique/>}/>
      <Route path='*' element={<HomeScreen/>}/>
      <Route path='/categoryProduct' element={<CategoryProduct/>} />
      <Route path='/categoryProduct/productCard' element={<ProductCard/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
