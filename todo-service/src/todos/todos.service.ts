import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, Connection} from 'typeorm';
import {Todo} from './entities/todo.entity';
import {Tag} from './entities/tag.entity';
import {CreateTodoDto} from './dto/todo.dto';

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
        @InjectRepository(Tag)
        private tagRepository: Repository<Tag>,
        private connection: Connection,
    ) {
    }

    async findAll(): Promise<Todo[]> {
        return this.todoRepository.find({relations: ['tags']});
    }

    async findOne(id: number): Promise<Todo> {
        const todo = await this.todoRepository.findOne({
            where: {id},
            relations: ['tags']
        });

        if (!todo) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }

        return todo;
    }

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            // 태그 처리
            let tags: Tag[] = [];
            if (createTodoDto.tags && createTodoDto.tags.length > 0) {
                tags = await Promise.all(createTodoDto.tags.map(async (name) => {
                    let tag = await this.tagRepository.findOne({where: {name}});
                    if (!tag) {
                        tag = this.tagRepository.create({name});
                        await this.tagRepository.save(tag);
                    }
                    return tag;
                }));
            }

            // Todo 생성
            const todo = this.todoRepository.create({
                ...createTodoDto,
                tags,
                completedAt: createTodoDto.completed ? new Date() : undefined,
            });

            await this.todoRepository.save(todo);
            await queryRunner.commitTransaction();

            return todo;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async toggle(id: number): Promise<Todo> {
        const todo = await this.findOne(id);
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? new Date() : undefined;
        return this.todoRepository.save(todo);
    }

    async remove(id: number): Promise<void> {
        const result = await this.todoRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }
    }
}