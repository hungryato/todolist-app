import React, {useState} from 'react';
import {CARD_STYLES, createTag} from '@constants/styles';
import {Tag} from '@types';

interface TodoPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, description?: string, tags?: Tag[]) => void;
}

export const TodoPopup: React.FC<TodoPopupProps> = ({isOpen, onClose, onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState<Tag[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim()) {
            onSubmit(title, description, tags.length > 0 ? tags : undefined);
            setTitle('');
            setDescription('');
            setTags([]);
            setTagInput('');
            onClose();
        }
    };

    const handleAddTag = () => {
        const trimmedTag = tagInput.trim();
        if (trimmedTag && !tags.some(tag => tag.name === trimmedTag)) {
            setTags([...tags, createTag(trimmedTag)]);
            setTagInput('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            handleAddTag();
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag.name !== tagToRemove));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">새 할 일 추가</h2>
                <form onSubmit={handleSubmit}>
                    {/* 기존 폼 필드들 유지 */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">제목</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">설명 (선택사항)</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">태그 (선택사항)</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="태그 입력 후 Enter"
                            />
                            <button
                                type="button"
                                onClick={handleAddTag}
                                className="ml-2 bg-blue-500 text-white px-3 py-2 rounded-md"
                            >
                                추가
                            </button>
                        </div>

                        {tags.length > 0 && (
                            <div className="mt-2 flex flex-wrap -ml-1">
                                {tags.map((tag) => (
                                    <span
                                        key={tag.name}
                                        className={`${CARD_STYLES.tag} ${tag.color.bg} ${tag.color.text} ml-1 mb-1 flex items-center`}
                                    >
                                            {tag.name}
                                        <button
                                            type="button"
                                            onClick={() => removeTag(tag.name)}
                                            className="ml-1 hover:text-opacity-80"
                                        >
                                                &times;
                                            </button>
                                        </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                            취소
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            추가
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};