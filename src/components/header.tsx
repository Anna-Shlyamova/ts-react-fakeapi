import React from 'react';
import HOCButton from './HOCButton';
import {useNavigate} from 'react-router-dom';
import Button from './button';

const Header = () =>{
    const navigate = useNavigate();
    const NavigateButton = HOCButton(Button);
    return(
        <header>
            <NavigateButton  text={'/main'}>Главная</NavigateButton>
            <NavigateButton text={'/about'}>О нас</NavigateButton>
        </header>
    );
}

export default Header;