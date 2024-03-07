import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Newproduct from './pages/Newproduct';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDataproduct } from './redux/productSlice';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './pages/Payment';
import Footer from './components/Footer';

function App() {

  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  useEffect(()=>{
    (async()=>{
      const res =await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`)
      const resData = await res.json()
      console.log(resData);
      dispatch(setDataproduct(resData))
    })()
  },[])
  console.log(productData);

  return (
    <div>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='menu/:filterby' element={<Menu/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUP' element={<SignUp/>}/>
          <Route path='/newproduct' element={<Newproduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
        <ToastContainer
        position="top-center"
        autoClose={1000}
        />
        <Footer/>
    </div>
  );
}

export default App;
