import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TodoList from '../pages/TodoList';

const AppRouteres: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/todo_list' element={<TodoList/>}/>
        </Routes>
    );
};

export default AppRouteres;