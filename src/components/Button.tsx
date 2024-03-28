import React, { FC, MouseEvent, ReactNode } from 'react';
import "../styles/Button.css";

interface IButton {
    children?: ReactNode;
    onClick?:((value: MouseEvent<HTMLButtonElement>) => void);
    loading?: boolean;
    disabled?: boolean;
}

const Button: FC<IButton> = ({
        children, 
        onClick, 
        loading, 
        disabled
    }) => {
    return (
        <button 
            className='button button-24'
            onClick={onClick}
            disabled={loading || disabled}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
};

export default Button;