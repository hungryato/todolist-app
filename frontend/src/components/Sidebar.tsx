import React, {useState} from 'react';

interface SidebarProps {
    onToggle: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({onToggle}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        onToggle(newState);
    };

    return (
        <div className="relative">
            {/* 원형 토글 버튼 */}
            <button
                className="fixed z-20 top-4 left-4 bg-indigo-600 hover:bg-indigo-700 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg"
                onClick={toggleSidebar}
            >
                {isOpen ? 'X' : '≡'}
            </button>

            {/* 사이드바 - 내용 없음 */}
            <div
                className={`fixed z-10 h-full bg-indigo-800 text-white w-64 shadow-xl transition-all duration-300 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="pt-16 px-4"></div>
            </div>

            {/* 오버레이 */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </div>
    );
};