import React from "react"
import "./Product.css"
import { connect } from "react-redux"
import { addToBasket } from "../../Redux/Cart/cart.actions"

const Product = ({ id, price, title, rating, image, addToBasket }) => {
  const item = {
    id: id,
    price: price,
    title: title,
    rating: rating,
    image: image,
  }
  
  return (
    <div className="product">
      <div className="product__info">
        <p>{title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p className="star">&#x1F7B4;</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={() => addToBasket(item)}>Add to Basket</button>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  addToBasket: (item) => dispatch(addToBasket(item)),
})
export default connect(null, mapDispatchToProps)(Product)
