-- tasks 테이블 - 기본 할 일 정보
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP DEFAULT NULL
);

-- tags 테이블 - 태그 정보
CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- task_tags 테이블 - 할 일과 태그의 다대다 관계
CREATE TABLE IF NOT EXISTS task_tags (
    task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (task_id, tag_id)
);

-- 샘플 태그 데이터
INSERT INTO tags (name)
VALUES ('프론트엔드'),
       ('백엔드'),
       ('학습'),
       ('서버'),
       ('데브옵스'),
       ('UI/UX'),
       ('알고리즘'),
       ('데이터베이스'),
       ('네트워크'),
       ('보안');

-- 샘플 할 일 데이터
INSERT INTO tasks (title, description, completed, completed_at)
VALUES ('리액트 공부하기', '리액트 훅과 상태관리에 대해 학습하기', false, null),
       ('Express 서버 구축', '백엔드 API 서버 만들기', true, CURRENT_TIMESTAMP),
       ('Docker 배포하기', '컨테이너를 이용해 서비스 배포하기', false, null),
       ('TypeScript 마이그레이션', '자바스크립트 프로젝트를 타입스크립트로 변환하기', false, null),
       ('데이터베이스 최적화', '쿼리 성능 개선 및 인덱스 추가하기', true, CURRENT_TIMESTAMP - INTERVAL '2 days'),
       ('사용자 인증 구현', 'JWT 기반 인증 시스템 구축하기', false, null),
       ('UI 디자인 개선', '사용자 경험 향상을 위한 인터페이스 리디자인', true, CURRENT_TIMESTAMP - INTERVAL '5 days'),
       ('API 문서화', 'Swagger를 활용한 API 문서 작성', false, null),
       ('단위 테스트 작성', '백엔드 기능에 대한 Jest 테스트 코드 작성', true, CURRENT_TIMESTAMP - INTERVAL '1 day'),
       ('CI/CD 파이프라인 구축', 'GitHub Actions를 활용한 자동화 배포 설정', false, null);

-- 태그 연결
INSERT INTO task_tags (task_id, tag_id)
SELECT 1, id
FROM tags
WHERE name IN ('프론트엔드', '학습');

INSERT INTO task_tags (task_id, tag_id)
SELECT 2, id
FROM tags
WHERE name IN ('백엔드', '서버');

INSERT INTO task_tags (task_id, tag_id)
SELECT 3, id
FROM tags
WHERE name IN ('데브옵스');

-- 추가된 샘플 데이터의 태그 연결
INSERT INTO task_tags (task_id, tag_id)
SELECT 4, id
FROM tags
WHERE name IN ('프론트엔드', '백엔드', '학습');

INSERT INTO task_tags (task_id, tag_id)
SELECT 5, id
FROM tags
WHERE name IN ('데이터베이스', '백엔드', '서버');

INSERT INTO task_tags (task_id, tag_id)
SELECT 6, id
FROM tags
WHERE name IN ('백엔드', '보안');

INSERT INTO task_tags (task_id, tag_id)
SELECT 7, id
FROM tags
WHERE name IN ('프론트엔드', 'UI/UX');

INSERT INTO task_tags (task_id, tag_id)
SELECT 8, id
FROM tags
WHERE name IN ('백엔드', '학습');

INSERT INTO task_tags (task_id, tag_id)
SELECT 9, id
FROM tags
WHERE name IN ('백엔드', '학습');

INSERT INTO task_tags (task_id, tag_id)
SELECT 10, id
FROM tags
WHERE name IN ('데브옵스', '서버');