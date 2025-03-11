import React from 'react';
import {Todo} from '../types';
import TodoCard from './TodoCard';

interface TodoListProps {
    todos: Todo[];
    selectedTodos: number[];
    onToggleTodo: (id: number) => void;
    onSelectTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
                                               todos,
                                               selectedTodos,
                                               onToggleTodo,
                                               onSelectTodo
                                           }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {todos.length === 0 ? (
                <p className="col-span-full text-center p-10 text-gray-500 bg-gray-50 rounded-lg text-lg shadow-sm">
                    할 일이 없습니다. 새로운 할 일을 추가해보세요!
                </p>
            ) : (
                todos.map(todo => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggleTodo}
                        onSelect={onSelectTodo}
                        isSelected={selectedTodos.includes(todo.id)}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;