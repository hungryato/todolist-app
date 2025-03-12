import {Tag} from '../types/todo';

export const CARD_STYLES = {
    container: "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col overflow-hidden hover:border-gray-300",
    padding: "p-5",
    tag: "inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800",
    buttonContainer: "flex justify-between items-center space-x-2 pt-1",
    button: "px-3 py-1.5 rounded-md text-sm font-medium flex-shrink-0",
    buttonCompleted: "bg-green-100 text-green-700 hover:bg-green-200",
    buttonInProgress: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    deleteButton: "px-3 py-1.5 bg-red-100 text-red-700 rounded-md text-sm font-medium flex-shrink-0 hover:bg-red-200"
};

/**
 * 문자열에서 태그 객체 생성
 * @param tagName 태그 이름
 * @returns 태그 객체
 */
export const createTag = (tagName: string): Tag => {
    return {
        name: tagName
    };
};

/**
 * 문자열 배열에서 태그 객체 배열 생성
 * @param tagNames 태그 이름 배열
 * @returns 태그 객체 배열
 */
export const createTagsFromNames = (tagNames: string[]): Tag[] => {
    return tagNames.map(name => createTag(name));
};