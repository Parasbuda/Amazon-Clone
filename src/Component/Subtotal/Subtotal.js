import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import {connect} from "react-redux"
import { getCartTotal } from "../../Redux/Cart/cartReducer"

const Subtotal = ({cart}) => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <React.Fragment>
                        <p>
                            Subtotal ({cart.length} items):<strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift.
                        </small>
                    </React.Fragment>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed To Checkout</button>
            
        </div>
    )
}

const mapStateToProps = state => ({
    cart:state.cart.cart
})
export default connect(mapStateToProps,null) (Subtotal)
