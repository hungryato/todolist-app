import React, {useState} from 'react';
import {TodoPopup} from '@components';
import {CARD_STYLES} from '@constants/styles.ts';

interface AddTodoCardProps {
    onAddTodo: (title: string, description?: string) => void;
}

export const AddTodoCard: React.FC<AddTodoCardProps> = ({onAddTodo}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsPopupOpen(true)}
                className={`${CARD_STYLES.container} items-center justify-center cursor-pointer`}
            >
                <span className="text-4xl text-gray-400 hover:text-gray-600 transition-colors duration-200">+</span>
            </div>

            <TodoPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onSubmit={onAddTodo}
            />
        </>
    );
};