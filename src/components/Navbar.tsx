import React, { FC } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar: FC = () => {
    return (
        <div>
            <div className='navbar'>
                <div className='btnnav'>
                    <Link to="/"><Button>Back</Button></Link>
                </div>
                <div className='navbar__links'>
                    <Link to='/todo_list'><div className='button-35'>TodoList</div></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;