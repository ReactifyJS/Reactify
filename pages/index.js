import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import ProductList from '../components/ProductList'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <ProductList />
  </App>
))
