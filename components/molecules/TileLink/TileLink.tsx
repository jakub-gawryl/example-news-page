import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  section?: {
    url: string;
    caption: string
  },
  img?: string;
};

const StyledTileLink = styled.div`
  height: 100%;

  .tile-link {
    display: block;
    position: relative;
    height: 100%;

    &__image {
      display: block;
      height: 100%;
    }

    &__image img {
      display: block;
      width: auto;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 1em;
      color: #fff;
      background: linear-gradient(0deg,rgba(0,0,0,0.7),transparent 80%);
    }

    &__title {
      font-weight: 500;
      font-size: 1.067em;
      letter-spacing: 0.025em;
      line-height: 1.5em;
    }

    &__section-anchor {
      position: relative;
      padding: 0.1333em 0.667em;
      margin-bottom: 0.4em;
      font-size: 0.867em;
      text-transform: uppercase;
      z-index: 10;
    }

    &__section-anchor:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: #179ec2;
      z-index: -1;
      transition: width .1s ease;
    }

    &__section-anchor:hover:before {
      width: 100%;
    }

    &__anchor {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const TileLink: React.FC<Props> = ({img, title, section}) => {
  const showSection = section?.caption && section?.url;

  return (
    <StyledTileLink>
      <div className="tile-link">
        <div className="tile-link__image">
          <img src={img} alt="" />
        </div>
        <div className="tile-link__content">
          {showSection && (
            <a href={section.url} className="tile-link__section-anchor">{section?.caption}</a>
          )}
          <h2 className="tile-link__title">{title}</h2>
          <a href="#" className="tile-link__anchor"></a>
        </div>
      </div>
    </StyledTileLink>
  )
}

export default TileLink;
