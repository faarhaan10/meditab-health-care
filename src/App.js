import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
