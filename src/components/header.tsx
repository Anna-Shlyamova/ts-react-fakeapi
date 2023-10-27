import React from 'react';
import HOCButton from './HOCButton';
import {useNavigate} from 'react-router-dom';
import Button from './button';

const Header = () =>{
    const navigate = useNavigate();
    return(
        <header>
            <Button onClick={() => navigate('/main')}>Главная</Button>
            <Button onClick={() => navigate('/about')}>О нас</Button>
        </header>
    );
}

export default Header;