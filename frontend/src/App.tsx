import React, {useState} from 'react';
import {Sidebar, TodoList} from '@components';
import {Todo} from '@types';
import {sampleTodos} from './data/sampleTodos';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(sampleTodos);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = (isOpen: boolean) => {
        setIsSidebarOpen(isOpen);
    };

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
            <Sidebar onToggle={handleToggleSidebar}/>
            <div
                className={`transition-all duration-300 ${
                    isSidebarOpen ? 'ml-64' : 'ml-0'
                } min-h-screen flex justify-center`}
            >
                <main className="w-full max-w-6xl px-4 pt-16">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                        onAddTodo={handleAddTodo}
                    />
                </main>
            </div>
        </div>
    );
};

export default App;