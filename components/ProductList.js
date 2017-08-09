import ErrorMessage from './ErrorMessage'
import PostUpvoter from './PostUpvoter'
import Product from './Product'
import withProductList from '../containers/queries/withProductList'

const ProductList = ({products, loading}) => {
  if (loading) {
    return <p>Loading…</p>
  }
  return (
    <div className="product-list">
      {products.map(product =>
        <Product key={product.node.id.toString()} product={product.node} />
      )}
    </div>
  )
}

export default withProductList(ProductList)