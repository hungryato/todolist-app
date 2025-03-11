import React from 'react'

interface HeaderProps {
    onAdd: () => void;
    onDelete: () => void;
    onLogin: () => void;
    onLogout: () => void;
    isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({onAdd, onDelete, onLogin, onLogout, isLoggedIn}) => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-50 shadow">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
            </div>
            <div className="flex gap-2">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    onClick={onAdd}>추가
                </button>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    onClick={onDelete}>삭제
                </button>
                {isLoggedIn ? (
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        onClick={onLogout}>로그아웃</button>
                ) : (
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        onClick={onLogin}>로그인</button>
                )}
            </div>
        </header>
    );
};

export default Header;