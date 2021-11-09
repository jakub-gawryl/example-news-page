import React from 'react';
import styled from 'styled-components';
import { MenuList as MenuListNS } from './types';
import MenuListItemComponent from './components/MenuListItem';
const cn = require('classnames');

export type MenuListProperties = {
  menuItems: MenuListNS.Items;
  mobileMenu?: boolean;
};

const StyledMenuList =  styled.div`
  .menu-list {
    & ul {
      display: flex;
      justify-content: center;
      padding: 0;
    }

    &__menu-item--mobile ul {
      flex-direction: column;
    }

    &__menu-item--mobile a {
      text-transform: initial;
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const MenuList: React.FC<MenuListProperties> = ({menuItems = [], mobileMenu = false}) => {
  const hasMenuItems = menuItems.length > 0;

  return (
    <StyledMenuList>
      <div className={cn('menu-list', {'menu-list__menu-item--mobile': mobileMenu})}>
        {hasMenuItems && <ul>
          {menuItems.map((menuItem, index) => <MenuListItemComponent key={index} menuItem={menuItem} />)}
        </ul>}
      </div>
    </StyledMenuList>
  )
}

export default MenuList;
