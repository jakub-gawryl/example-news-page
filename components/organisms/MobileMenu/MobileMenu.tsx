import React from 'react';
import MobileMenuButton from 'components/organisms/MobileMenu/components/MobileMenuButton';
import styled from 'styled-components';
const cn = require('classnames');

type MobileMenuProps = {
  children?: React.ReactElement | React.ReactElement[];
  clickDimmerToClose?: boolean;
};

const transtionTime = 0.5;
const transitionType = 'ease';

const StyledMobileMenu = styled.div`
  .mobile-menu {
    &__button {
      position: relative;
      z-index: 10001;
    }

    &__full-page {
      visibility: hidden;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &__full-page--block {
      visibility: visible;
    }

    &__dimmer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      transition: background-color ${transtionTime}s ${transitionType};
    }

    &__dimmer--active {
      background-color: rgba(0, 0, 0, 0.5);
    }
    &__dimmer--closable {
      cursor: pointer;
    }

    &__content {
      position: absolute;
      top: 0;
      right: 0;
      width: 80%;
      height: 100%;
      overflow: auto;
      background:#fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      transform: translateX(100%);
      transition: transform ${transtionTime}s ${transitionType};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    &__content--opened {
      transform: translateX(0);
    }
  }
`;

const MobileMenu: React.FC<MobileMenuProps> = ({children, clickDimmerToClose = false}) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [isContentDisplayed, setIsContentDisplayed] = React.useState(false);

  const onMobileBtnClick = () => {
    setIsContentDisplayed(true);
    setIsOpened(!isOpened);
  };

  const onContentTransitionEnd = () => !isOpened && setIsContentDisplayed(false);

  const onDimmerClick = () => clickDimmerToClose && setIsOpened(false);

  return (
    <StyledMobileMenu>
      <div className="mobile-menu">
        <div className="mobile-menu__button">
          <MobileMenuButton onClick={onMobileBtnClick} closedIcon={isOpened}/>
        </div>
        <div className={cn('mobile-menu__full-page', {'mobile-menu__full-page--block': isContentDisplayed})}>
          <div
            className={cn('mobile-menu__dimmer', {
              'mobile-menu__dimmer--active': isOpened,
              'mobile-menu__dimmer--closable': clickDimmerToClose
            })}
            onClick={onDimmerClick}
          ></div>
          <div className={cn('mobile-menu__content', {'mobile-menu__content--opened': isOpened})} onTransitionEnd={onContentTransitionEnd}>
            {children}
          </div>
        </div>
      </div>
    </StyledMobileMenu>
  )
}

export default MobileMenu;
