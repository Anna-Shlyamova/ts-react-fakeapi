import React from "react";

interface buttonProps{
    onClick: ()=> void;
    children: string;
    text?: string;
}

const Button = ({onClick, children}: buttonProps) =>{
    return(
        <button onClick={onClick}>{children}</button>
    )
}
export default Button;