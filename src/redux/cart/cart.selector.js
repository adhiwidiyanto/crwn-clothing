import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartSelector = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartSelector],
  (cartItems) => 
    cartItems.reduce(
      (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity, 
      0
    )
)