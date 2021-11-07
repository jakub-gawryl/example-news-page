import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Example News Page</title>
        <meta name="description" content="This is example news page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h1>Hello world!</h1>

    </div>
  )
}

export default Home;
