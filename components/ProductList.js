import ErrorMessage from './ErrorMessage'
import PostUpvoter from './PostUpvoter'
import Product from './Product'
import withProductList from '../containers/queries/withProductList'
import withCheckoutId from '../containers/redux/withCheckoutId'

const ProductList = ({checkoutId, products, loading}) => {
  if (loading) {
    return <p>Loading…</p>
  }
  return (
    <div className="product-list">
      {products.map(product =>
        <Product key={product.node.id.toString()} product={product.node} checkoutId={checkoutId}/>
      )}
    </div>
  )
}

export default withCheckoutId(withProductList(ProductList))