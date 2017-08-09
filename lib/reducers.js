export default {
  checkoutId: (state = null, { type, payload }) => {
    switch (type) {
      case 'SET_CHECKOUT_ID':
        return payload.id
      default:
        return state
    }
  }
}
