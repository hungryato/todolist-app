import React from 'react';

interface HeaderProps {
    // 로그인/로그아웃 관련 props 제거
}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-900">Todo App</h1>
                <button className="p-2 rounded-md hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </header>
    );
};