import React from "react"
import "./Checkout.css"
import Subtotal from "../../Component/Subtotal/Subtotal"
import { connect } from "react-redux"
import CheckoutProduct from "../../Component/CheckoutProduct/CheckoutProduct"

const Checkout = ({ cart }) => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        {cart.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty !!!</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add To Basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket:</h2>
            {cart.map((item) => (
              <CheckoutProduct item={item} key={item.id} />
            ))}
          </div>
        )}
          </div>
          {cart.length > 0 && 
              <div className="checkout__right">
              <Subtotal/>
                  </div>
          }
    </div>
  )
}
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
})
export default connect(mapStateToProps)(Checkout)
