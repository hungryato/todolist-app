import React, {useState} from 'react';

interface AddTodoCardProps {
    onAddTodo: (title: string, description?: string) => void;
}

export const AddTodoCard: React.FC<AddTodoCardProps> = ({onAddTodo}) => {
    const [isAdding, setIsAdding] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (title.trim()) {
            onAddTodo(title, description);
            setTitle('');
            setDescription('');
            setIsAdding(false);
        }
    };

    if (!isAdding) {
        return (
            <div
                onClick={() => setIsAdding(true)}
                className="bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center h-full cursor-pointer hover:bg-gray-50"
            >
                <span className="text-4xl text-gray-400">+</span>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
            <form onSubmit={handleSubmit}>
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
                        onClick={() => setIsAdding(false)}
                    >
                        취소
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        추가
                    </button>
                </div>
            </form>
        </div>
    );
};