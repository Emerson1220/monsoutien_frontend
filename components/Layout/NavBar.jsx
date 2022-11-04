//Libraries
import { useState } from 'react';

//Components
import NavItem from './NavItem';
import BtnSign from '../Btn/BtnSign';

//Styles
import style from './NavBar.module.scss';

//Data
const MENU_LIST = [
  { text: 'Accueil', href: '/' },
  { text: 'Essais', href: '/essais' },
  { text: 'Boutique', href: '/shop' },
  { text: 'connexion', href: '/connexion' },
  { text: 'inscrire', href: '/inscription' },
];

export default function NavBar() {
  return (
    <nav className={style.NavBar}>
      {MENU_LIST.map((menu) => (
        <div key={menu.text}>
          <NavItem {...menu} />
        </div>
      ))}
      <BtnSign />
    </nav>
  );
}
