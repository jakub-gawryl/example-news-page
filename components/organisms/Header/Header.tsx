import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from 'components/organisms/MobileMenu';
import usePageScroll from 'hooks/usePageScroll';
import styled from 'styled-components';
import MenuList, { MenuList as MenuListNS } from 'components/molecules/MenuList';
import SocialMediaList, { SocialMediaList as SocialMediaListType } from 'components/molecules/SocialMediaList';
import BreakPoint from 'components/atoms/BreakPoint';

type Props = {
  companyName?: string;
  fixedHeaderAt?: number;
};

const StyledHeader = styled.div`
  .page-header {
    &__inner {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: #fff;
    }

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 0;
      transition: padding .4s ease;
    }

    &--shrinked .page-header__inner {
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.35);
    }

    &--shrinked .page-header__content {
      padding: 20px 0;
    }
  }
`;

const menuItems: MenuListNS.Items = [
  {
    caption: 'Home',
    href: '/',
    active: true
  },
  {
    caption: 'News',
    href: '/news'
  },
  {
    caption: 'Sport',
    href: '/sport'
  },
  {
    caption: 'Travel',
    href: '/travel'
  },
  {
    caption: 'Culture',
    href: '/culture'
  }
];

const socialMedia: SocialMediaListType.Items = [
  {
    kind: SocialMediaListType.EKind.TWITTER,
    url: 'https://twitter.com',
    title: 'Check out our twitter!'
  },
  {
    kind: SocialMediaListType.EKind.YOUTUBE,
    url: 'https://youtube.com'
  },
  {
    kind: SocialMediaListType.EKind.FACEBOOK,
    url: 'https://facebook.com'
  },
  {
    kind: SocialMediaListType.EKind.INSTAGRAM,
    url: 'https://instagram.com'
  },
  {
    kind: SocialMediaListType.EKind.LINKED_IN,
    url: 'https://linkedin.com'
  }
  ,
  {
    kind: SocialMediaListType.EKind.PINTEREST,
    url: 'https://pinterest.com'
  }
];

const Header: React.FC<Props> = ({fixedHeaderAt = 10}) => {
  const scrollX = usePageScroll();
  const contentRef = React.useRef(null);
  const placeholderRef = React.useRef(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  // TODO - Change setContentHeight to update everytime window is resized!
  //@ts-ignore
  React.useEffect(() => setContentHeight(contentRef?.current?.clientHeight || 0), [setContentHeight]);

  const fixed = (fixedHeaderAt === 0) ? false : scrollX >= fixedHeaderAt;
  
  return (
  <StyledHeader>
    <div className={`page-header${fixed ? ` page-header--shrinked` : ``}`}>
      <div className="page-header__placeholder" ref={placeholderRef} style={{height: contentHeight}}></div>
      <div className="page-header__inner">
        <div className="container">
          <div className="page-header__content" ref={contentRef}>
            {/* TODO: Move logo to separate component */}
            <Link href="/" passHref>
              <a>
                <Image src="/logo.png" alt="Example logo" width={288} height={48} title="Example Page" />
              </a>
            </Link>

            <BreakPoint min={640}>
              <SocialMediaList socialMedia={socialMedia} />
            </BreakPoint>

            <BreakPoint min={960}>
              <MenuList menuItems={menuItems} />
            </BreakPoint>

            <BreakPoint max={959}>
              <MobileMenu>
                <BreakPoint max={639}>
                  <SocialMediaList socialMedia={socialMedia} />
                </BreakPoint>
                <MenuList menuItems={menuItems} mobileMenu={true} />
              </MobileMenu>
            </BreakPoint>
          </div>
        </div>
      </div>
    </div>
  </StyledHeader>
  )
}

export default Header;
