import React from 'react';
import styled from 'styled-components';
const cn = require('classnames');

export type MobileMenuButtonProps = {
  onClick?: () => void;
  closedIcon?: boolean;
};

const StyledMobileMenu = styled.div`
  .mobile-menu-button {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    background: #05B8E7;
    border-radius: 3px;
    cursor: pointer;

    &__burger,
    &__burger:before,
    &__burger:after {
      position: absolute;
      left: 0px;
      height: 4px;
      background-color: #fff;
      border-radius: 3px;
      transition: background-color .25s ease;
    }

    &__burger:before,
    &__burger:after {
      content: "";
      width: 100%;
      transition: transform .25s ease,  top .25s ease;
    }

    &__burger {
      top: 50%;
      width: 70%;
      margin: 0 15%;
      margin-top: -2px;
    }

    &__burger:before {
      top: -8px;
    }

    &__burger:after {
      top: 8px;
    }

    &__burger--close {
      background-color: transparent;
    }

    &__burger--close:before {
      top: 0;
      transform: rotate(-45deg);
    }

    &__burger--close:after {
      top: 0;
      transform: rotate(45deg);
    }
  }
`;

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({closedIcon = false, onClick = () => {}}) => {
  return (
    <StyledMobileMenu>
      <div className="mobile-menu-button" onClick={onClick}>
        <div className={cn('mobile-menu-button__burger', {'mobile-menu-button__burger--close': closedIcon})}></div>
      </div>
    </StyledMobileMenu>
  )
}

export default MobileMenuButton;
