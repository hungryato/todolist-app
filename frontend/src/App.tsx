import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import {Todo} from './types';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [selectedTodos, setSelectedTodos] = useState<number[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // 여기에 필요한 로직 구현

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto max-w-6xl">
                <Header
                    onAdd={() => {/* 추가 로직 */
                    }}
                    onDelete={() => {/* 삭제 로직 */
                    }}
                    onLogin={() => setIsLoggedIn(true)}
                    onLogout={() => setIsLoggedIn(false)}
                    isLoggedIn={isLoggedIn}
                />
                <main className="py-6">
                    <TodoList
                        todos={todos}
                        selectedTodos={selectedTodos}
                        onToggleTodo={(id) => {/* 토글 로직 */
                        }}
                        onSelectTodo={(id) => {/* 선택 로직 */
                        }}
                    />
                </main>
            </div>
        </div>
    );
};

export default App;