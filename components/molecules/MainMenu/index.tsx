import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledMainMenu =  styled.div`
  .main-menu {
    & ul {
      display: flex;
      justify-content: center;
    }

    & ul li {
      list-style: none;
    }

    & ul li a {
      position: relative;
      display: block;
      padding: 5px 10px;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 14px;
    }

    & ul li a:after {
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

    & ul li a:hover:after {
      display: block;
    }
  }
`;

const MainMenu = () => {
  return (
    <StyledMainMenu>
      <div className="main-menu">
        <ul>
          <li><Link href="/lorem">Lorem</Link></li>
          <li><Link href="/ipsum">Ipsum</Link></li>
          <li><Link href="/dolor">Dolor</Link></li>
          <li><Link href="/sit">Sit</Link></li>
          <li><Link href="/amet">Amet</Link></li>
        </ul>
      </div>
    </StyledMainMenu>
  )
}

export default MainMenu;
