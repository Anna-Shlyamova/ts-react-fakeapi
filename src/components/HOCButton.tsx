import React from 'react';
import Button from "./button";
import {useNavigate} from 'react-router-dom';

interface HocButtonProps{
    text: string;
    children: string;
}

interface buttonProps{
    onClick: ()=> void;
    children: string;
}

const HOCButton = (Button: ({ onClick, children }: buttonProps) => JSX.Element) =>{
    return({text, children}: HocButtonProps)=>{
        //eslint-disable-next-line react-hooks/rules-of-hooks 
        const navigate = useNavigate();
        const onClick = ()=>{
            navigate(text);
        }
    return (<Button onClick={onClick}>{children}</Button>);
    }
}
export default HOCButton;