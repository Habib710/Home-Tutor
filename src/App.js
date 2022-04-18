
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Error from './Component/Error/Error';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Checkout from './Component/CheckOut/Checkout';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import Singup from './Component/Singup/Singup';
import Requeir from './Component/Requeirauth/Requeir';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <Requeir>
        <Checkout></Checkout>
        </Requeir>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='*' element={<Error></Error>}></Route>


      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
