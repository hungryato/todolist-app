# todolist-app

이 프로젝트는 Docker를 활용한 풀스택 Todo List 웹 애플리케이션입니다. 프론트엔드, 백엔드, 데이터베이스가 모두 도커 컨테이너로 구성되어 있어 간편하게 개발 및 배포할 수 있습니다.

## 프로젝트 구조

```
프로젝트/
├── frontend/           # React/Vite 프론트엔드
├── todo-service/       # Node.js 백엔드 API
├── docker-compose.yml  # 기본 도커 컴포즈 설정
├── .env                # 환경 변수 (git에 포함되지 않음)
├── .env.example        # 환경 변수 예시 (git에 포함됨)
└── README.md           # 현재 파일
```

## 주요 기능

- 할 일 항목 생성, 조회, 수정, 삭제 (CRUD)
- Docker 기반 개발/배포 환경
- 환경 변수를 통한 설정 관리

## 기술 스택

- **프론트엔드**: React, Vite
- **백엔드**: Node.js, Express
- **데이터베이스**: PostgreSQL 13
- **개발 환경**: Docker, Docker Compose

## 시작하기

1. 저장소 복제

```bash
git clone [저장소 URL]
cd [프로젝트 폴더명]
```

2. 환경 변수 설정

```bash
cp .env.example .env
# .env 파일을 편집하여 실제 값 입력
```

3. 애플리케이션 실행

```bash
# 개발 환경
docker-compose up -d
```

4. 애플리케이션 종료

```bash
docker-compose down
```

## 환경별 설정

개발 및 운영 환경에 따라 다른 설정을 사용할 수 있습니다:

```bash
# 개발 환경
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

# 운영 환경
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## 주의사항(개발 중 발생한 문제들)

1. ESM과 CommonJS 모듈 호환성 문제
    - `package.json`에 `"type": "module"` 설정으로 ESM을 사용합니다
    - CommonJS 모듈인 pg를 가져올 때는 특별한 import 패턴을 사용해야 합니다:
        ```bash
        import pkg from 'pg';
        const { Pool } = pkg;
        ```
2. TypeScript와 ESM 통합 관련 이슈

    - `tsconfig.json`에서 `"module": "NodeNext"`, `"moduleResolution": "NodeNext"`를 설정해야 합니다
    - JavaScript로 컴파일된 후에도 ESM 방식을 유지합니다

3. 파일 확장자 명시 필요

    - ESM 사용 시 import 경로에 .js 확장자를 포함해야 합니다
        ```bash
        // 올바른 방식
        import pool from './db.js';
    
        // 잘못된 방식 (작동하지 않음)
        import pool from './db';
        ```
4. 타입 정의 파일 설치

    - 외부 라이브러리 사용 시 해당 타입 정의(@types/*)를 설치해야 합니다
    - 필요한 타입 정의: `@types/express`, `@types/pg` 등

## 보안 관련 참고사항

- 민감한 정보(DB 자격증명 등)는 `.env` 파일에 저장되며 Git에 포함되지 않습니다
- `.env.example` 파일에는 필요한 환경 변수의 구조만 포함되어 있습니다