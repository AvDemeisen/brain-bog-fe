import Head from 'next/head'
import { ApolloProvider } from "@apollo/client"
import Client from '../util/client'
import Layout from '../components/layout/component'
import Form from '../components/form/component'

const About = () => {
  return (
    <ApolloProvider client={Client}>
        <Head>
          <title> add</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout title={"add"} >
            <Form />
        </Layout>
    </ApolloProvider>
  )
}

export default About