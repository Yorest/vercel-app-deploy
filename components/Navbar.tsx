
import React, { FC } from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

export const Navbar: FC = () => {
  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
  return (
    <nav className={styles['menu-container']} >

    {menuItems.map(({text,href})=> <ActiveLink key={href} text={text} href={href}/>  )}

  
    </nav>
  )
}
