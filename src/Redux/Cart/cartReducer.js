import actionTypes from "./cart.action.type"
const INITIAL_STATE = {
  cart: []
}

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0)
  
  
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET: 
      return {
        ...state,
       cart:[...state.cart,action.payload]
      }
    
    case actionTypes.REMOVE_FROM_BASKET:
      let newCart = [...state.cart]
      const index = state.cart.findIndex((item) => item.id === action.payload)
      if (index >= 0) {
        newCart.splice(index,1)
      }
      return {
        ...state,
        cart: newCart,
      }
    

    default:
      return state
  }
}
export default cartReducer
