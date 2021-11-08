import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export type MainMenuItem = {
  caption: string;
  href: string;
  active?: boolean;
};

export type MainMenuProperties = {
  menuItems: MainMenuItem[];
};

const StyledMainMenu =  styled.div`
  .main-menu {
    & ul {
      display: flex;
      justify-content: center;
    }

    & .main-menu__menu-item {
      list-style: none;
    }

    & .main-menu__menu-item a {
      position: relative;
      display: block;
      padding: 5px 10px;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 14px;
    }

    & .main-menu__menu-item a:after {
      position: absolute;
      bottom: 0px;
      left: 5px;
      content: "";
      display: block;
      width: calc(100% - 10px);
      height: 3px;
      background-color: #7bc2ff;
      display: none;
    }

    & .main-menu__menu-item a:hover:after,
    & .main-menu__menu-item--active a:after {
      display: block;
    }
  }

  @media screen and (max-width: 640px) {
    .main-menu {}
  }
`;

const MainMenu: React.FC<MainMenuProperties> = ({menuItems = []}) => {
  const hasMenuItems = menuItems.length > 0;

  return (
    <StyledMainMenu>
      <div className="main-menu">
        {hasMenuItems && <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index} className={`main-menu__menu-item${menuItem.active ? ` main-menu__menu-item--active` : ``}`}>
              <Link href={menuItem.href}>{menuItem.caption}</Link>
            </li>
          ))}
        </ul>}
      </div>
    </StyledMainMenu>
  )
}

export default MainMenu;
