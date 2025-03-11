import React from 'react';
import {Todo} from '../types';

interface TodoCardProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onSelect: (id: number) => void;
    isSelected: boolean;
}

const TodoCard: React.FC<TodoCardProps> = ({todo, onToggle, onSelect, isSelected}) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition transform hover:-translate-y-1 hover:shadow-lg border-l-4 
                ${isSelected ? 'bg-blue-50 ring-2 ring-blue-500' : ''} 
                ${todo.completed ? 'border-l-green-500 opacity-80' : 'border-l-blue-600'}`}
            onClick={() => onSelect(todo.id)}
        >
            <div className="flex justify-between items-center mb-2">
                <h3 className={`font-medium text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                    {todo.title}
                </h3>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                />
            </div>
            {todo.description &&
                <p className="text-gray-600 text-sm my-2">{todo.description}</p>
            }
            <p className="text-gray-500 text-xs mt-4 italic">
                생성일: {new Date(todo.created_at).toLocaleDateString()}
            </p>
        </div>
    );
};

export default TodoCard;