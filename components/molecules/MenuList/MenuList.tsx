import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
const cn = require('classnames');

export type MenuListItem = {
  caption: string;
  href: string;
  active?: boolean;
};

export type MenuListProperties = {
  menuItems: MenuListItem[];
  mobileMenu?: boolean;
};

const StyledMenuList =  styled.div`
  .menu-list {
    & ul {
      display: flex;
      justify-content: center;
      padding: 0;
    }

    &__menu-item {
      list-style: none;
    }

    &__menu-item a {
      position: relative;
      display: block;
      padding: 5px 10px;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 1rem;
    }

    &__menu-item a:after {
      position: absolute;
      bottom: 0px;
      left: 5px;
      content: "";
      display: block;
      width: calc(100% - 10px);
      height: 3px;
      background-color: #05B8E7;
      display: none;
    }

    &__menu-item a:hover:after,
    &__menu-item--active a:after {
      display: block;
    }

    &__menu-item--mobile ul {
      flex-direction: column;
    }

    &__menu-item--mobile a {
      text-transform: initial;
      font-size: 3rem;
      margin-bottom: 1rem;;
    }
  }
`;

const MenuList: React.FC<MenuListProperties> = ({menuItems = [], mobileMenu = false}) => {
  const hasMenuItems = menuItems.length > 0;

  return (
    <StyledMenuList>
      <div className={cn('menu-list', {'menu-list__menu-item--mobile': mobileMenu})}>
        {hasMenuItems && <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index} className={cn('menu-list__menu-item', {'menu-list__menu-item--active': menuItem.active})}>
              <Link href={menuItem.href}>{menuItem.caption}</Link>
            </li>
          ))}
        </ul>}
      </div>
    </StyledMenuList>
  )
}

export default MenuList;
