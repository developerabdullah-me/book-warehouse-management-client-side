
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';

import About from './Pages/About/About';
import Login from './Pages/User/Login/Login'
import SignUp from './Pages/User/Signup/SignUp'
import Home from './Pages/Home/Home/Home'
import Header from './Pages/Sheare/Header/Header';



function App() {
  return (
    <div className="">
<Header></Header>

<Routes>
  <Route path="/"element={<Home></Home>}></Route>

  <Route path="/blog"  element={<Blog></Blog>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/register' element={<SignUp></SignUp>}></Route>
</Routes>
    </div>
  );
}

export default App;
