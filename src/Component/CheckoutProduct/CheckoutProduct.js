import React from "react"
import "./CheckoutProduct.css"
import {connect} from "react-redux"
import { removeFromBasket } from "../../Redux/Cart/cart.actions"

const CheckoutProduct = ({ item ,removeFromBasket}) => {
  const { id, price, title, rating, image } = item
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
              </p>
              <div className="checkoutProduct__rating">
                  {Array(rating)
                      .fill()
                      .map((_) => <p className="checkoutProduct__star">&#x1F7B4;</p>)}
              </div>
              <button onClick={()=>removeFromBasket(id)}>Remove From Basket</button>
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
    removeFromBasket:(id)=>dispatch(removeFromBasket(id))
})
export default connect(null,mapDispatchToProps) (CheckoutProduct)
