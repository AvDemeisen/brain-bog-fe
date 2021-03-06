import Head from 'next/head'
import { ApolloProvider } from "@apollo/client"
import Client from '../util/client'
import Layout from '../components/layout/component'
import ThoughtList from '../components/thoughtList/component'

const Home = () => {
  return (
    <ApolloProvider client={Client}>
        <Head>
          <title>title</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout title={"title"}>
        <ThoughtList />
        </Layout>
    </ApolloProvider>
  )
}

export default Home