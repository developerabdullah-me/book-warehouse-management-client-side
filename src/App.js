
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Login from './Pages/User/Login/Login'
import SignUp from './Pages/User/Signup/SignUp'
import Home from './Pages/Home/Home/Home'
import Header from './Pages/Sheare/Header/Header';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddItems from './Pages/AddItems/AddItems';
import Update from './Pages/Update/Update';
import Blog from './Pages/Blog/Blog'
import RequireAuth from './Pages/Sheare/RequireAuth/RequireAuth';

import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Sheare/Footer/Footer';
import MyAddededItems from './Pages/MyAddededItems/MyAddededItems';
import Notfownd from './Pages/Sheare/Notfownd/Notfownd';


function App() {
  return (
    <div className="">
    <Header></Header>
    
    <Routes>
      <Route path="/"element={<Home></Home>}></Route>
    
      <Route path="/blog"  element={<Blog></Blog>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/manageInventory' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
      <Route path='/serviceAdd' element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
      <Route path='/myAddedItems' element={<RequireAuth><MyAddededItems></MyAddededItems></RequireAuth>}></Route>
      <Route path='/update'element={<RequireAuth><Update></Update></RequireAuth>}></Route>
      <Route path='/update/:Id'element={<RequireAuth><Update></Update></RequireAuth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<SignUp></SignUp>}></Route>
      <Route path='*' element={<Notfownd></Notfownd>}></Route>

    </Routes>
   <Footer></Footer>
    <ToastContainer></ToastContainer>
        </div>
  );
}

export default App;
