import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const TodoList = () => {
    const [tasks, setTasks] = useState([
        {id: 1, title: '샘플 할일 1'},
        {id: 2, title: '샘플 할일 2'},
        {id: 3, title: '샘플 할일 3'}
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/tasks');
            if (!response.ok) {
                throw new Error(`HTTP 오류: ${response.status}`);
            }
            const data = await response.json();
            setTasks(data);
        } catch (err) {
            setError(`데이터 가져오기 실패: ${err.message}`);
            console.error('에러 발생:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={fetchTasks} disabled={loading}>
                {loading ? '로딩 중...' : '백엔드에서 데이터 가져오기'}
            </button>

            {error && <div style={{color: 'red'}}>{error}</div>}

            <ul>
                {tasks.map(task => <li key={task.id}>{task.title}</li>)}
            </ul>
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoList/>}/>
                <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;