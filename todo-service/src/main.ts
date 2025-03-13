import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// 명시적으로 .env 파일 경로 지정
dotenv.config({ path: resolve(__dirname, '../.env') });

// 환경 변수 확인 로그
console.log('환경 변수 확인 (상세):', {
  NODE_ENV: process.env.NODE_ENV,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD?.substring(0, 1) + '****',
  DB_DATABASE: process.env.DB_DATABASE,
  ENV_FILE_PATH: resolve(__dirname, '../.env')
});

async function bootstrap() {
    // 전역 로거 인스턴스 생성
    const logger = new Logger('App');

    // 애플리케이션 생성 시 로깅 옵션 설정
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'log', 'debug', 'verbose'], // 모든 로그 레벨 활성화
    });

    // CORS 설정
    app.enableCors();

    // 미들웨어 추가
    app.use((req: Request, res: Response, next: NextFunction) => {
        logger.log(`${req.method} ${req.url}`);
        next();
    });

    const port = process.env.PORT || 5001;
    await app.listen(port);
    logger.log(`Application is running on port ${port}`);
}

bootstrap();