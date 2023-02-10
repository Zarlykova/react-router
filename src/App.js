
import { Route, Routes,} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MyCart from './pages/MyCart';
import MyOrder from './pages/MyOrder';
import ProductDetail from './pages/ProductDetail';

import Products from './pages/Products';

function App() {
 

  return (
    <div >
      <Header/>
      <main>
        <Routes>
          <Route path='/products' element={<Products/>}>
         <Route path="/products/:productId/details" element={<ProductDetail/>} />
          </Route>
          <Route path='/myCart' element={<MyCart/>}></Route>
          <Route path='/myOrders' element={<MyOrder/>}></Route>
        </Routes>
     
      </main>
    </div>
  );
}

export default App;
