import React, {useState} from 'react';
import {Header, TodoList} from '@components';
import {Todo} from '@types';
import {sampleTodos} from './data/sampleTodos';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(sampleTodos);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
    };

    const handleAddTodo = (title: string, description?: string) => {
        const newTodo: Todo = {
            id: todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
            title,
            description,
            completed: false,
            created_at: new Date().toISOString()
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                onLogin={() => setIsLoggedIn(true)}
                onLogout={() => setIsLoggedIn(false)}
                isLoggedIn={isLoggedIn}
            />
            <main className="max-w-7xl mx-auto px-4 py-6 w-full">
                <TodoList
                    todos={todos}
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={handleToggleTodo}
                    onAddTodo={handleAddTodo}
                />
            </main>
        </div>
    );
};

export default App;