
import './App.css';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import Pricing from './components/Home/Pricing/Pricing';
import AllServices from './components/AllServices/AllServices';
import Doctors from './components/Doctors/Doctors';
import Service from './components/Service/Service';
import Contact from './components/Home/Contact/Contact';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import CheckOut from './components/CheckOut/CheckOut';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      {/* scroll restoration */}
      <ScrollToTop />

      {/* nav bar  */}
        <Header/>

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/services">
            <AllServices></AllServices>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <PrivetRoute path="/pricing">
            <Pricing></Pricing>
          </PrivetRoute>

          <PrivetRoute path="/doctors">
            <Doctors></Doctors>
          </PrivetRoute>

          <PrivetRoute path="/service/:serviceID">
            <Service></Service>
          </PrivetRoute>

          <PrivetRoute path="/placeorder/:priceID">
            <PlaceOrder></PlaceOrder>
          </PrivetRoute>

          <PrivetRoute path="/checkout">
            <CheckOut></CheckOut>
          </PrivetRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
