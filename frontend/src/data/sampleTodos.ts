import {Todo} from '@types';

export const sampleTodos: Todo[] = [
    {
        id: 1,
        title: "리액트 컴포넌트 설계하기",
        description: "재사용 가능한 컴포넌트를 만들고 문서화하기",
        completed: false,
        created_at: new Date().toISOString()
    },
    {
        id: 2,
        title: "API 연동 구현하기",
        description: "백엔드 API와 통신하는 서비스 레이어 구현",
        completed: true,
        created_at: new Date(Date.now() - 86400000).toISOString() // 하루 전
    },
    {
        id: 3,
        title: "테스트 코드 작성하기",
        description: "Jest와 React Testing Library를 사용한 단위 테스트 추가",
        completed: false,
        created_at: new Date(Date.now() - 172800000).toISOString() // 이틀 전
    }
];