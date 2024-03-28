import React, { FC } from 'react';

interface InputFieldProps {
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({value, onChange, onKeyPress}) => {
    return (
        <div>
            <input 
                    className='inputField' 
                    type='text' 
                    placeholder='Whrite here...'
                    // Поточне значення поля вводу
                    value={value} // Використовуємо пропс value замість InputValue
                    // Обробник зміни значення поля вводу
                    onChange={onChange} // Використовуємо пропс onChange
                    // Обробник натискання клавіші на полі вводу
                    onKeyPress={onKeyPress} // Використовуємо пропс onKeyPress
                />
        </div>
    );
};

export default InputField;