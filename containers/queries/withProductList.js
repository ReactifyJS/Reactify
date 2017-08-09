import { gql, graphql } from 'react-apollo'

const POSTS_PER_PAGE = 10

const productList = gql`
  query productListQuery {
    shop {
      products(first:20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            options {
              id
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default graphql(productList, {
  // options: {
  //   variables: {
  //     skip: 0,
  //     first: POSTS_PER_PAGE
  //   }
  // },

  alias: 'withProductList',

  props: ({ data }) => {

    return {
      products: data.shop && data.shop.products && data.shop.products.edges,
      loading: data.loading
    };

    // loadMorePosts: () => {
    //   return data.fetchMore({
    //     variables: {
    //       skip: data.allPosts.length
    //     },
    //     updateQuery: (previousResult, { fetchMoreResult }) => {
    //       if (!fetchMoreResult) {
    //         return previousResult
    //       }
    //       return Object.assign({}, previousResult, {
    //         // Append the new posts results to the old one
    //         products: [...previousResult.products, ...fetchMoreResult.products]
    //       })
    //     }
    //   })
    // }
  }
})