import { gql, graphql } from 'react-apollo'

const shopInfo = gql`
  query shopInfoQuery {
    shop {
      name
      description
    }
  }
`

export default graphql(shopInfo, {

  alias: 'withShopInfo',

  props: ({ data }) => {
    return {
      shop: data.shop,
      loading: data.loading
    };

  }
})