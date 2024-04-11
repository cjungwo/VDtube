import React, { useState } from 'react'

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => { 
    const [ isMenuAction, setIsMenuAction ] = useState(false);

    const toggleMenu = () => {
        setIsMenuAction(!isMenuAction);
    }
    
    return (
        <header id='header' role='banner' className={isMenuAction ? 'active' : ''} >
            <Logo toggleMenu={toggleMenu}/>
            <Menu />
            <Sns />
        </header>
    )
}

export default Header