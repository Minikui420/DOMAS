import { Entity, Column, JoinTable, OneToOne, JoinColumn } from "typeorm"
import { Model } from "../model/Model"
import { Users } from './Users'


@Entity()
export class UsersToken extends Model {

    @Column({ type: 'character varying', unique: true })
    refreshToken: string

    @OneToOne(() => Users, users => users.usersToken)
    @JoinColumn({ name : 'usersId'})
    users: Users

}