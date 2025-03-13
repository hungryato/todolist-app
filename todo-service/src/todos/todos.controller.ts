import {Controller, Get, Post, Body, Param, Delete, NotFoundException, Patch} from '@nestjs/common';
import {TodosService} from './todos.service';
import {Todo} from './entities/todo.entity';
import {CreateTodoDto} from './dto/todo.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {
    }

    @Get()
    findAll(): Promise<Todo[]> {
        return this.todosService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Todo> {
        return this.todosService.findOne(+id);
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
        return this.todosService.create(createTodoDto);
    }

    @Patch(':id/toggle')
    toggle(@Param('id') id: string): Promise<Todo> {
        return this.todosService.toggle(+id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<{ success: boolean }> {
        await this.todosService.remove(+id);
        return {success: true};
    }
}