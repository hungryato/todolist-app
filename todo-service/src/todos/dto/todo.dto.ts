import {IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsBoolean()
    completed: boolean;

    @IsOptional()
    @IsArray()
    @IsString({each: true})
    tags: string[];
}