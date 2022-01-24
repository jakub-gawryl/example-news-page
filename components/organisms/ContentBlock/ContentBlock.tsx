import TileLink from 'components/molecules/TileLink';
import React from 'react';
import styled from 'styled-components';
const cn = require('classnames');

const articles = [
  {
    img: '/example-imgs/img_1440x810_16x9.jpg',
    title: 'Dog - man\'s best friend',
    section: {
      caption: 'Life',
      url: '/life'
    }
  },
  {
    img: '/example-imgs/img2_1440x810_16x9.jpg',
    title: 'The most beautiful corners of Croatia',
    section: {
      caption: 'Travel',
      url: '/travel'
    }
  },
  {
    img: 'https://img.youtube.com/vi/kTXTPe3wahc/maxresdefault.jpg',
    title: 'Parallel Worlds Probably Exist',
    section: {
      caption: 'Veritasium',
      url: 'https://www.youtube.com/c/veritasium/featured'
    }
  },
  {
    img: 'https://img.youtube.com/vi/SAQ-iIJkLzA/maxresdefault.jpg',
    title: 'Drinking in ZERO-G! (and other challenges of a trip to Mars)',
    section: {
      caption: 'Veritasium',
      url: 'https://www.youtube.com/c/veritasium/featured'
    }
  },
  {
    img: 'https://img.youtube.com/vi/XRr1kaXKBsU/maxresdefault.jpg',
    title: 'Why Gravity is NOT a Force',
    section: {
      caption: 'Veritasium',
      url: 'https://www.youtube.com/c/veritasium/featured'
    }
  }
];

const StyledContentBlock = styled.div`
  .content-block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    font-size: 1rem;

    &__item--full-2h {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 3;
      font-size: 1.5rem;
    }
  }
`;

const ContentBlock = () => {
  const displayArticles = [
    ...articles
  ];
  return (
    <StyledContentBlock>
      <div className="content-block">
        {displayArticles.map((article, index) => (
          <div className={cn('content-block__item', {'content-block__item--full-2h': index === 0})} key={index}>
            <TileLink
              img={article.img}
              title={article.title}
              section={article.section}
            />
          </div>
        ))}
        <div className="content-block__item">
          <div style={{width: '100%', height: '100%', background: '#eee'}}>
            <span>Advertisement</span>
          </div>
        </div>
      </div>
    </StyledContentBlock>
  )
}

export default ContentBlock;
