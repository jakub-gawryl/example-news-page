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
  .tile-link {
    display: block;
    position: relative;

    &__image {
      display: block;
    }

    &__image img {
      display: block;
      width: auto;
      max-width: 100%;
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
      padding: 16px;
      color: #fff;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), transparent 70%);
    }

    &__title {
      font-weight: 500;
      font-size: 1.6rem;
      letter-spacing: 1px;
      line-height: 2.2rem;
    }

    &__section-anchor {
      position: relative;
      padding: 4px 10px;
      margin-bottom: 10px;
      font-size: 1rem;
      text-transform: uppercase;
      z-index: 10;
    }

    &__section-anchor:before {
      content: '';
      position: absolute;
      top: -1px;
      left: 0;
      width: 4px;
      height: 100%;
      background: #05B8E7;
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
