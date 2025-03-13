import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TodosModule} from './todos/todos.module';
import {join} from 'path';
import {ConfigModule, ConfigService} from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
            ignoreEnvFile: false,
            load: [() => ({
                DB_HOST: process.env.DB_HOST || 'db',
                DB_PORT: process.env.DB_PORT || '5432',
                DB_USERNAME: process.env.DB_USERNAME || 'postgres',
                DB_PASSWORD: process.env.DB_PASSWORD || 'password',
                DB_DATABASE: process.env.DB_DATABASE || 'todo_db'
            })]
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                console.log('TypeORM DB 설정:', {
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    database: configService.get('DB_DATABASE')
                });

                return {
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: parseInt(configService.get('DB_PORT', '5432')),
                    username: configService.get('DB_USERNAME', 'postgres'),
                    password: configService.get('DB_PASSWORD', 'password'),
                    database: configService.get('DB_DATABASE', 'todo_db'),
                    entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
                    synchronize: false,
                    logging: true
                };
            }
        }),
        TodosModule,
    ],
})
export class AppModule {
}