import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;
}