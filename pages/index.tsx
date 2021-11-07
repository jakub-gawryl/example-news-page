import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/organisms/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Example News Page</title>
        <meta name="description" content="This is example news page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <div className="container">
        <div style={{height: '1800px'}}>&gt;&gt;&gt; Lorem ipsum - some content here &lt;&lt;&lt;</div>
      </div>
    </div>
  )
}

export default Home;
