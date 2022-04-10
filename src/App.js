import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Login from './components/login/Login';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UseContext from './components/context/UseContext'
import Footer from './components/footer/Footer';
import Addservice from './components/addservice/Addservice';
import Home from './components/home/Home';
import Book from './components/book/Book';
import PrivateRoute from './components/privateroute/PrivateRoute'
import PlaceOrder from './components/placeOrder/PlaceOrder';
import MyOrder from './components/myorder/MyOrder';
import AboutUs from './components/aboutus/AboutUs';
import ManageOrder from './components/manageOrder/ManageOrder';
function App() {
  return (
    <div>
      <UseContext>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Banner></Banner>
        <Home></Home>
        </Route>
        <Route path='/login'>
        <Login></Login>
        </Route>
        <Route path='/home'>
          <Banner></Banner>
          <Home></Home>
        </Route>
        <Route path='/myorders'>
         <MyOrder></MyOrder>
        </Route>
        <PrivateRoute path='/book/:bookId'>
          <Book></Book>
        </PrivateRoute>
        <PrivateRoute path='/addservice'>
          <Addservice></Addservice>
        </PrivateRoute>
        <PrivateRoute path='/manageorders'>
        <ManageOrder></ManageOrder>
        </PrivateRoute>
        <Route path='/aboutus'>
          <AboutUs></AboutUs>
        </Route>
        <PrivateRoute path='/placeOrder/:placeOrderId'>
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </UseContext>
     
    </div>
  );
}

export default App;
