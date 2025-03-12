import React from 'react';
import {Todo, Tag} from '../types/todo';
import {CARD_STYLES, createTag} from '../constants/styles';

interface TodoCardProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export const TodoCard: React.FC<TodoCardProps> = ({todo, onDelete, onToggle}) => {
    // 태그 데이터 변환 유틸리티 함수
    const normalizeTags = (tags?: string[] | Tag[]): Tag[] => {
        if (!tags || tags.length === 0) return [];

        // 첫 번째 항목이 문자열인지 확인하여 배열 타입 결정
        if (typeof tags[0] === 'string') {
            return (tags as string[]).map(tagName => createTag(tagName));
        }

        return tags as Tag[];
    };

    // 태그 정규화
    const normalizedTags = normalizeTags(todo.tags);

    return (
        <div className={`${CARD_STYLES.container} transition-all duration-200 hover:shadow-md`}>
            <div className={`${CARD_STYLES.padding} flex flex-col h-full`}>
                {/* 제목 영역 */}
                <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{todo.title}</h3>
                </div>

                {/* 내용 영역 */}
                <div className="flex-grow mb-3">
                    {todo.description ? (
                        <p className="text-gray-600 text-sm line-clamp-3">
                            {todo.description}
                        </p>
                    ) : (
                        <div className="h-2"></div>
                    )}
                </div>

                {/* 태그 영역 - 모든 태그가 동일한 색상 클래스 사용 */}
                <div className="min-h-[28px] mb-3">
                    {normalizedTags.length > 0 && (
                        <div className="flex flex-wrap -ml-1">
                            {normalizedTags.map(tag => (
                                <span
                                    key={tag.name}
                                    className={`${CARD_STYLES.tag} ml-1 mb-1`}
                                >
                      {tag.name}
                    </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* 버튼 영역 */}
                <div className="flex justify-between items-center space-x-2 mt-2">
                    <button
                        onClick={() => onToggle(todo.id)}
                        className={`${CARD_STYLES.button} ${
                            todo.completed
                                ? CARD_STYLES.buttonCompleted
                                : CARD_STYLES.buttonInProgress
                        } transition-colors hover:bg-opacity-80 focus:ring-2 focus:ring-offset-1`}
                        aria-label={todo.completed ? '완료 취소하기' : '완료하기'}
                    >
                        {todo.completed ? '완료' : '진행 중'}
                    </button>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className={`${CARD_STYLES.deleteButton} transition-colors hover:bg-opacity-80 focus:ring-2 focus:ring-offset-1`}
                        aria-label="할 일 삭제하기"
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
};