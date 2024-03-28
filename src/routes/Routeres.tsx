// Doesn't uses

import React from 'react';
import Home from '../pages/Home';
import TodoList from '../pages/TodoList';

export interface IRoute {
    path: string;
    element: React.ElementType;
}

export enum RoutePath {
    HOME = '/',
    TODOLIST = '/todo_list'
}

export const Routeres: IRoute[] = [
    {path: RoutePath.HOME, element: Home},
    {path: RoutePath.TODOLIST, element: TodoList}
]