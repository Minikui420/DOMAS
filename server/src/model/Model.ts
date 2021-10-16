import {
    Entity, CreateDateColumn, UpdateDateColumn, 
    BeforeInsert, PrimaryGeneratedColumn, BaseEntity
} from "typeorm"
import { v4 as uuid } from 'uuid'



@Entity()
export class Model extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @BeforeInsert()
    createUuid = () => {
        this.id = uuid()
    }

}