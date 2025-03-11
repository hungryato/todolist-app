# todolist-app

이 프로젝트는 Docker를 활용한 풀스택 Todo List 웹 애플리케이션입니다. 프론트엔드, 백엔드, 데이터베이스가 모두 도커 컨테이너로 구성되어 있어 간편하게 개발 및 배포할 수 있습니다.

## 프로젝트 구조

```
프로젝트/
├── frontend/           # React/Vite 프론트엔드
├── backend/            # Node.js 백엔드 API
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

## 보안 관련 참고사항

- 민감한 정보(DB 자격증명 등)는 `.env` 파일에 저장되며 Git에 포함되지 않습니다
- `.env.example` 파일에는 필요한 환경 변수의 구조만 포함되어 있습니다