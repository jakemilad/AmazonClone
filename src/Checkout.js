import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal.js"
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
const[{basket, user}, dispatch] = useStateValue();

  return (
      <div className="checkout">
          <div className="checkout__left">
              <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/LPAOffers/April/Prime/Store/V2/LPA501_1500x250.jpg" alt=""/>
            <div>
                <h3>{user ? "Hello, " + user.email : ""}</h3>
              <h2 className="checkout__title">Your Checkout Items</h2>
              {basket.map(item => (
                  <CheckoutProduct 
                  id = {item.id}
                  title = {item.title}
                  image = {item.image}
                  price = {item.price}
                  rating = {item.rating}
                  />
              ))}
            </div>
          </div>

          <div className="checkout__right">
              <Subtotal />
          </div>

      </div>
  )
}

export default Checkout