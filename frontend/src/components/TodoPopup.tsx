import React, {useState} from 'react';

interface TodoPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, description?: string) => void;
}

export const TodoPopup: React.FC<TodoPopupProps> = ({isOpen, onClose, onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (title.trim()) {
            onSubmit(title, description);
            resetForm();
        }
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200 max-w-md w-full m-4">
                <h2 className="text-xl font-semibold mb-4">할 일 추가</h2>
                <div className="mb-3">
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded p-2 text-gray-800"
                        placeholder="제목"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
                </div>
                <div className="mb-3">
          <textarea
              className="w-full border border-gray-300 rounded p-2 text-gray-800"
              placeholder="설명 (선택사항)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
          />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="px-4 py-2 text-gray-600 mr-2"
                        onClick={resetForm}
                    >
                        취소
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={handleSubmit}
                    >
                        추가
                    </button>
                </div>
            </div>
        </div>
    );
};