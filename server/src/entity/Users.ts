import { Entity, Column } from "typeorm"
import { Model } from "../model/Model"



@Entity()
export class Users extends Model {

    @Column()
    username: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ default: false })
    isAdmin: boolean

}