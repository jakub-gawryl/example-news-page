import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainMenu from '../../molecules/MainMenu/index';
import usePageScroll from '../../../hooks/usePageScroll';
import styled from 'styled-components';

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
      width:100%;
    }

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 0;
      transition: padding .4s ease;
    }

    &--shrinked .page-header__content {
      padding: 20px 0;
    }
  }
`;

const Header: React.FC<Props> = ({fixedHeaderAt = DEFAULT_SHRINK_AT}) => {
  const scrollX = usePageScroll();
  const contentRef = React.useRef(null);
  const placeholderRef = React.useRef(null);
  const [contentHeight, setContentHeight] = React.useState(0);
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

            <MainMenu />
          </div>
        </div>
      </div>
    </div>
  </StyledHeader>
  )
}

export default Header;
