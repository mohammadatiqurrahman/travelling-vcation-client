// import logo from './logo.svg';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AddServices from './components/AddServices/AddServices';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';
import Login from './components/Login/Login';
import MyOrder from './components/MyOrder/MyOrder';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Traveller from './components/Traveller/Traveller';
import WinterTour from './components/WinterTour/WinterTour';
import AuthProvider from './context/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Heading></Heading>
            <Services></Services>
            <WinterTour></WinterTour>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Heading></Heading>
            <Services></Services>
            <WinterTour></WinterTour>
            <Traveller></Traveller>
            <Footer></Footer>
          </Route>
          <Route path="/addServices">
            <AddServices></AddServices>
          </Route>
          <PrivateRoute path="/place_order/:serviceId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/my_orders">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
