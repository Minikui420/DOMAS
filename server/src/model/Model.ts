import {
    Entity, CreateDateColumn, PrimaryColumn,
    UpdateDateColumn, BeforeInsert
} from "typeorm"

import { v4 as uuid } from 'uuid'


@Entity()
export class Model {

    @PrimaryColumn({ type: 'uuid' })
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