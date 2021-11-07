import React from 'react';
import style from './MainMenu.module.css';
import Link from 'next/link';

const MainMenu = () => {
  return (
    <div className={style.mainMenu}>
      <ul>
        <li><Link href="/lorem">Lorem</Link></li>
        <li><Link href="/ipsum">Ipsum</Link></li>
        <li><Link href="/dolor">Dolor</Link></li>
        <li><Link href="/sit">Sit</Link></li>
        <li><Link href="/amet">Amet</Link></li>
      </ul>
    </div>
  )
}

export default MainMenu;
