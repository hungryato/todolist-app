import React from 'react';
import {TodoCard, AddTodoCard} from '@components';
import {Todo} from '@types';

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
    onAddTodo: (title: string, description?: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
                                                      todos,
                                                      onDeleteTodo,
                                                      onToggleTodo,
                                                      onAddTodo
                                                  }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {todos.map(todo => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    onDelete={onDeleteTodo}
                    onToggle={onToggleTodo}
                />
            ))}
            <AddTodoCard onAddTodo={onAddTodo}/>
        </div>
    );
};