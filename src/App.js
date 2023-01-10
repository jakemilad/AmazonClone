import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';

const promise = loadStripe('pk_test_51MIhaoI7LaU9QEMOAI1eZ2UILm3i1F4RFUN8n50mdz0kEJ2pLddduDwqNUmoEUE00CTNmdwdHdK4uUrEEOzsg5gi00M9iGnwvS');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={[<Header />, <Home />]} />
        <Route path="/checkout" element={[<Header />, <Checkout />]} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={[<Header />, <Elements stripe={promise}> <Payment /> </Elements>]} />
        <Route path="/orders" element={[<Header />, <Orders />]} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
