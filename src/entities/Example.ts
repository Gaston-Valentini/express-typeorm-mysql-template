import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("examples")
export class Example extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    example!: string

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}