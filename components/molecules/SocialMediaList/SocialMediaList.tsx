import React from 'react';
import SocialMediaItem from './components/SocialMediaItem';
import { SocialMediaList as SocialMediaListType } from './types';
import styled from 'styled-components';

type Props = {
  socialMedia: SocialMediaListType.Item[];
  svgStyle?: SocialMediaListType.EItemStyle;
};

const StyledSocialMediaList = styled.div`
  .social-media {
    display: flex;

    &__item {
      margin: 0 2px 0 0;
      border-radius: 4px;
      overflow: hidden;
      width: 30px;
      height: 30px;
    }
  }
`;

const SocialMediaList: React.FC<Props> = ({
  socialMedia = [],
  svgStyle = SocialMediaListType.EItemStyle.FILLED
}) => {
  const hasSocialMedia = socialMedia.length > 0;

  return (
    <StyledSocialMediaList>
      {hasSocialMedia && (
        <div className="social-media">
          {socialMedia.map((item, index) => (
            <div className="social-media__item" key={index} >
              <SocialMediaItem item={item} svgStyle={svgStyle} />
            </div>
          ))}
        </div>
      )}
    </StyledSocialMediaList>
  )
}

export default SocialMediaList;
