import React, { FC, useState} from 'react';
import { IInput } from '../types/types';
import "../styles/TodoList.css";
import InputField from '../components/InputField';

const TodoList: FC<IInput> = () => {
    const [InputValue, setInputValue] = useState<string>('');
    const [todos, setTodos] = useState<string[]>([]);
    // Додається новий стан "completedTodos", який буде масивом булевих значень.
    // Кожне значення відповідає тому, чи завершено відповідне завдання "todo".
    const [completedTodos, setCompletedTodos] = useState<boolean[]>([]);

    // Функція, яка викликається при зміні значення поля вводу
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Оновлюємо значення поля вводу зі значенням зміненої властивості
        setInputValue(e.target.value)
    }

    const removeItem = (indexToRemove: number) => {
        setTodos(todos.filter((_, index) => index !== indexToRemove));
    };

    // Функція, яка викликається при натисканні клавіші на полі вводу
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Перевіряємо, чи натиснута клавіша "Enter" і чи поле вводу не порожнє
        if (e.key === 'Enter' && InputValue.trim() !== '') {
            // Додаємо нове завдання до списку завдань
            setTodos([...todos, InputValue.trim()]);
            // Коли додається нове "todo", ви також додаєте нове значення "false" до "completedTodos".
            // Це означає, що за замовчуванням нове "todo" не вважається завершеним.
            setCompletedTodos([...completedTodos, false]);
            // Очищаємо значення поля вводу
            setInputValue('');
        }
    }
    
    // Коли ви натискаєте на "todo", ви "переключаєте" відповідне значення в "completedTodos".
    // Якщо "todo" було завершено, воно стає незавершеним, і навпаки.
    const handleTodoClick = (index: number) => {
        const newCompletedTodos = [...completedTodos];
        newCompletedTodos[index] = !newCompletedTodos[index];
        setCompletedTodos(newCompletedTodos);
    }

    return (
        <div className='body'>
            <div className='box'>
                <h2 className='nameTodoList'>
                    To do List
                </h2>
                <InputField value={InputValue} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
                {/* Список завдань */}
                <ul>
                    {todos.map((todo, index) => (
                        // Використовується значення "completedTodos" для визначення, який клас застосувати до кожного "todo".
                        // Якщо "todo" завершено, воно отримує клас 'inputText done'. Інакше воно отримує клас 'inputText'.
                        <div className='forallul'>
                            <li 
                                className={`inputText ${completedTodos[index] && 'done'}`}
                                key={index}
                                onClick={() => handleTodoClick(index)}
                            >
                                {todo}
                            </li>
                            <button className='closeicon' onClick={() => removeItem(index)}></button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;