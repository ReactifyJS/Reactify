export default {
  checkoutId(state = null, { type, payload }) {
    switch (type) {
      case 'SET_CHECKOUT_ID':
        return payload.id
      default:
        return state
    }
  },
  isCartOpen(state = false, { type, payload }) {
    switch (type) {
      case 'TOGGLE_CART': 
        return !state
      case 'OPEN_CART':
        return true
      case 'CLOSE_CART':
        return false
      default:
        return state
    }
  },
}
