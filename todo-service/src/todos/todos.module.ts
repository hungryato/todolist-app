import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TodosController} from './todos.controller';
import {TodosService} from './todos.service';
import {Todo} from './entities/todo.entity';
import {Tag} from './entities/tag.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Todo, Tag])],
    controllers: [TodosController],
    providers: [TodosService],
})
export class TodosModule {
}