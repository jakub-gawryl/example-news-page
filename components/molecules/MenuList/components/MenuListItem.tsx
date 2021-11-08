import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MenuItem } from './../types';
const cn = require('classnames');

type MenuListItemProps = {
  menuItem: MenuItem;
};

const StyledMenuListItem = styled.li`
  list-style: none;

  a {
    position: relative;
    display: block;
    padding: 5px 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1em;
  }

  a:after {
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

  a:hover:after,
  .menu-list-item--active a:after {
    display: block;
  }
`;

const MenuListItem: React.FC<MenuListItemProps> = ({menuItem}) => {
  return (
    <StyledMenuListItem>
      <div className={cn('menu-list-item', {'menu-list-item--active': menuItem.active})}>
        <Link href={menuItem.href}>{menuItem.caption}</Link>
      </div>
    </StyledMenuListItem>
  )
}

export default MenuListItem
