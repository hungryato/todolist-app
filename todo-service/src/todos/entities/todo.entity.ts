import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable} from 'typeorm';
import {Tag} from './tag.entity';

@Entity('tasks')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({nullable: true})
    description: string;

    @Column({default: false})
    completed: boolean;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @Column({name: 'completed_at', nullable: true, type: 'timestamp'})
    completedAt: Date | undefined;

    @ManyToMany(() => Tag, {cascade: true})
    @JoinTable({
        name: 'task_tags',
        joinColumn: {name: 'task_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'tag_id', referencedColumnName: 'id'},
    })
    tags: Tag[];
}