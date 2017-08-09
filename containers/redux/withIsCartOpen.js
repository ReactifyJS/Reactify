/*

Get cart state from Redux

Also pass down `dispatch` method used to *set* checkout ID

*/
import { connect } from 'react-redux';

const withIsCartOpen = connect(
  (state) => ({ isCartOpen: state.isCartOpen }),
)

export default withIsCartOpen