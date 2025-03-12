import {Todo} from '@types';
import {createTagsFromNames} from '@constants/styles';

export const sampleTodos: Todo[] = [
    {
        id: 1,
        title: "리액트 컴포넌트 구현",
        description: "투두 리스트 앱의 기본적인 컴포넌트 구현하기",
        completed: false,
        created_at: "2023-09-15T09:00:00Z",
        tags: createTagsFromNames(["개발", "프론트엔드"])
    },
    {
        id: 2,
        title: "API 연동",
        description: "백엔드 API와 연동하여 데이터 처리 구현",
        completed: true,
        created_at: "2023-09-14T10:30:00Z",
        completed_at: "2023-09-15T11:45:00Z",
        tags: createTagsFromNames(["개발", "백엔드"])
    },
    {
        id: 3,
        title: "스타일링",
        description: "Tailwind CSS를 활용하여 UI 디자인 적용",
        completed: false,
        created_at: "2023-09-16T08:15:00Z",
        tags: createTagsFromNames(["디자인", "CSS"])
    },
    {
        id: 4,
        title: "상태 관리",
        description: "Context API 또는 Redux를 사용한 상태 관리 구현",
        completed: false,
        created_at: "2023-09-16T14:20:00Z",
        tags: createTagsFromNames(["개발", "상태관리"])
    },
    {
        id: 5,
        title: "테스트 코드 작성",
        description: "Jest와 React Testing Library를 활용한 테스트 코드 작성",
        completed: false,
        created_at: "2023-09-17T09:45:00Z",
        tags: createTagsFromNames(["테스트", "품질"])
    },
    // 새로운 샘플 데이터 추가
    {
        id: 6,
        title: "사용자 인증 구현",
        description: "JWT를 이용한 로그인/회원가입 기능 구현",
        completed: true,
        created_at: "2023-09-18T11:20:00Z",
        completed_at: "2023-09-19T14:30:00Z",
        tags: createTagsFromNames(["개발", "보안", "백엔드"])
    },
    {
        id: 7,
        title: "성능 최적화",
        description: "메모이제이션과 지연 로딩을 통한 앱 성능 개선",
        completed: false,
        created_at: "2023-09-19T09:15:00Z",
        tags: createTagsFromNames(["성능", "최적화", "개발"])
    },
    {
        id: 8,
        title: "디자인 시스템 구축",
        completed: false,
        created_at: "2023-09-20T13:45:00Z",
        tags: createTagsFromNames(["디자인", "UI/UX"])
    },
    {
        id: 9,
        title: "배포 파이프라인 구성",
        description: "CI/CD 파이프라인을 구성하여 자동 배포 환경 구축",
        completed: true,
        created_at: "2023-09-15T16:20:00Z",
        completed_at: "2023-09-17T18:10:00Z",
        tags: createTagsFromNames(["DevOps", "배포", "자동화"])
    },
    {
        id: 10,
        title: "접근성 개선",
        description: "WCAG 지침에 따른 접근성 개선 작업",
        completed: false,
        created_at: "2023-09-21T10:30:00Z",
        tags: createTagsFromNames(["접근성", "품질", "UI/UX"])
    }
];