/*

Get checkout ID from Redux store. 

Also pass down `dispatch` method used to *set* checkout ID

*/
import { connect } from 'react-redux';

const withCheckoutId = connect(
  (state) => ({ checkoutId: state.checkoutId }),
)

export default withCheckoutId