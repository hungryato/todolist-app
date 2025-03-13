import {Todo} from '@types';

const API_URL = 'http://localhost:5001/todos';

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }
    return response.json();
};

export const addTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    if (!response.ok) {
        throw new Error('Failed to add todo');
    }
    return response.json();
};

export const deleteTodo = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete todo');
    }
};

export const toggleTodo = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/${id}/toggle`, {
        method: 'PATCH',
    });
    if (!response.ok) {
        throw new Error('Failed to toggle todo');
    }
};