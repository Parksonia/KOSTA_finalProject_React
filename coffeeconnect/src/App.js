import {BrowserRouter,Routes,Router, Route} from 'react-router-dom'
import ShopMain from './ShopMain';
import ItemDetail from './ItemDetail';
import ButtonDemo from './ButtonDemo';
import WishItem from './WishItem';
import CartList from './CartList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<ShopMain/>}></Route>
        <Route path='/itemDetail/:itemCode' element={<ItemDetail/>}></Route>
        <Route path='/wishItem' element={<WishItem/>}></Route>
        <Route path='/cartList' element={<CartList/>}></Route>
        <Route path='/buttonDemo' element={<ButtonDemo/>}/>
      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
