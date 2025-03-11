import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // 경로를 수정했습니다 (index.css로 통합)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);