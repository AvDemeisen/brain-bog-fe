import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from '@apollo/client'

  const link = createHttpLink({
    uri: 'https://brain-bin-be.herokuapp.com/graphql'
  })
  
  const Client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  })
  
  export default Client