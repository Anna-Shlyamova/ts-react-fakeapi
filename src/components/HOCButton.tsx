import React, {ComponentType} from 'react';
import {useNavigate} from 'react-router-dom';

interface HocButtonProps{
    text: string;
    children: string;
    onClick: () => void;
}

function HOCButton<T extends HocButtonProps>(Component: ComponentType<T>) {
    return(hocProps: Omit<T, 'onClick'>)=>{
        //eslint-disable-next-line react-hooks/rules-of-hooks 
        const navigate = useNavigate();
        const onClick = ()=>{
            navigate(hocProps.text);
        }
    return (<Component {...(hocProps as T)} onClick={onClick}>{hocProps.children}</Component>);
    }
}

export default HOCButton;