import React, {useEffect, useState} from 'react';
import {Todo} from '@types';
import {TodoCard, AddTodoCard} from '@components';
import {fetchTodos, deleteTodo, toggleTodo} from '@services';

interface TodoListProps {
}

export const TodoList: React.FC<TodoListProps> = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const todos = await fetchTodos();
                setTodos(todos);
                console.log('Loaded todos:', todos);
            } catch (error) {
                console.error('Error loading todos:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadTodos();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
            setError(error.message);
        }
    };

    const handleToggle = async (id: number) => {
        try {
            await toggleTodo(id);
            setTodos(todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ));
        } catch (error) {
            console.error('Error toggling todo:', error);
            setError(error.message);
        }
    };

    const handleAddTodo = (newTodo: Todo) => {
        setTodos([...todos, newTodo]);
    };

    if (loading) {
        return <div className="p-4 text-center">할 일 목록을 불러오는 중...</div>;
    }

    if (error) {
        return <div className="p-4 text-center text-red-600">오류: {error}</div>;
    }

    if (todos.length === 0) {
        return <div className="p-4 text-center">등록된 할 일이 없습니다.</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AddTodoCard onAddTodo={handleAddTodo} />

            {todos.map(todo => (
                <TodoCard
                    key={todo.id}
                    todo={todo}
                    onDelete={handleDelete}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    );
};