import actionTypes from "./cart.action.type";


export const addToBasket = item => ({
    type: actionTypes.ADD_TO_BASKET,
    payload:item
})
 
export const removeFromBasket = id => ({
    type: actionTypes.REMOVE_FROM_BASKET,
    payload:id
})