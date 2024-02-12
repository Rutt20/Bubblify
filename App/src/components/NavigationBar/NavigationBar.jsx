import './styles.css';
import logo from '../../resources/images/logo.png';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const NavigationBar = () => (
    <>
        <nav className="nav-bar">
            <a className='nav-logo' href='/'>
                <p className='logo-letter'>
                    B
                </p>
            </a>
            <ul className='nav-links'>
                <div className='main-links'>
                    <NavigationLink title="Products" href="/bubbles"/>
                    <NavigationLink title="Bundles" href="/bundles"/>
                    <NavigationLink title="About us" href="/about"/>
                </div>
                <div className='cart-link'>
                    <NavigationLink title="Cart" href="/cart"/>
                </div>
            </ul>
        </nav>
    </>
);