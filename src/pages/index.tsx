import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Hello world</p>
      <h1>My name is Kobe Li</h1>
      <p> I am an aspiring software engineer specializing in web development. My primary focus is often on the backend but I also have a good deal of experience working on the frontend. </p>
    </Layout>
  )
}
