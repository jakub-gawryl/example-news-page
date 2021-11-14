import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'components/organisms/Header';
import TileLink from 'components/molecules/TileLink';

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
        <div style={{width: '69%', display: 'inline-block', margin: '0 2% 0 0'}}>
          <TileLink
            img="/example-imgs/img_1440x810_16x9.jpg"
            title={`Z cyklu "Przemyślenia Pixela" - Jak zostać łowcą spadającego jedzonka, czyli o Pixelowaniu słów kilka`}
            section={{
              caption: 'Życiówki',
              url: '/life'
            }}
          />
        </div>
        <div style={{width: '29%', display: 'inline-block'}}>
          <TileLink
            img="/example-imgs/img2_1440x810_16x9.jpg"
            title="The most beautiful corners of Croatia."
            section={{
              caption: 'Travel',
              url: '/travel'
            }}
          />
        </div>
      </div>

      <div className="container">
        <div style={{height: '1800px'}}>&gt;&gt;&gt; Lorem ipsum - some content here &lt;&lt;&lt;</div>
      </div>
    </div>
  )
}

export default Home;
