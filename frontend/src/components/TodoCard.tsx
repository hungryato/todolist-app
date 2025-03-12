import React from 'react';
import {Todo} from '@types';
import {CARD_STYLES} from '@constants/styles.ts';

interface TodoCardProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export const TodoCard: React.FC<TodoCardProps> = ({todo, onDelete, onToggle}) => {
    return (
        <div className={CARD_STYLES.container}>
            <div className={`${CARD_STYLES.padding} flex flex-col h-full`}>
                <div className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{todo.title}</h3>
                    {todo.description && (
                        <p className="text-gray-600 text-sm line-clamp-3 mt-1">
                            {todo.description}
                        </p>
                    )}
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <button
                        onClick={() => onToggle(todo.id)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                            todo.completed
                                ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                        }`}
                    >
                        {todo.completed ? '완료' : '진행 중'}
                    </button>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className="text-red-500 hover:text-red-600 font-medium transition-colors duration-200 px-2 py-1.5"
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
};