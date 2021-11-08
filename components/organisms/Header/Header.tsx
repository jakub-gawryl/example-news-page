import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainMenu from 'components/organisms/MainMenu';
import MobileMenu from 'components/organisms/MobileMenu';
import usePageScroll from 'hooks/usePageScroll';
import styled from 'styled-components';
import MenuList from 'components/molecules/MenuList';
import { MenuItems } from 'components/molecules/MenuList/types';

const DEFAULT_SHRINK_AT = 10;

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

const menuItems: MenuItems = [
  {
    caption: 'Home',
    href: '/',
    active: true
  },
  {
    caption: 'Lorem',
    href: '/lorem'
  },
  {
    caption: 'Ipsum',
    href: '/ipsum'
  },
  {
    caption: 'Dolor',
    href: '/dolor'
  }
];

const Header: React.FC<Props> = ({fixedHeaderAt = DEFAULT_SHRINK_AT}) => {
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
            <Link href="/" passHref>
              <a>
                <Image src="/logo.png" alt="Example logo" width={384} height={64} title="Example Page" />
              </a>
            </Link>

            <MainMenu>
              <MenuList menuItems={menuItems} />
            </MainMenu>

            <MobileMenu>
              <MenuList menuItems={menuItems} mobileMenu={true} />
            </MobileMenu>
          </div>
        </div>
      </div>
    </div>
  </StyledHeader>
  )
}

export default Header;
