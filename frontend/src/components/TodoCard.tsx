import React from 'react';
import {Todo} from '@types';

interface TodoCardProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export const TodoCard: React.FC<TodoCardProps> = ({todo, onDelete, onToggle}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{todo.title}</h3>
                {todo.description && <p className="text-gray-600 mb-4">{todo.description}</p>}
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => onToggle(todo.id)}
                        className={`px-3 py-1 rounded-full text-sm ${
                            todo.completed
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                        }`}
                    >
                        {todo.completed ? '완료' : '진행 중'}
                    </button>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className="text-red-500 hover:text-red-700"
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
};