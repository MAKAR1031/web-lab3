import React from 'react';

const TodoItem = ({todo, onChangePriority}) => (
    <li className={todo.priority ? 'priority-task' : ''}>
        <span>{todo.text}</span>
        <button className='btn priority' onClick={onChangePriority}>Priority</button>
    </li>
);

export default TodoItem;