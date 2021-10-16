import { Model } from "../model/Model"
import { UsersToken } from './Token'
import { Entity, Column, OneToOne } from "typeorm"


@Entity()
export class Users extends Model {

    @Column('character varying')
    username: string

    @Column({ type: 'character varying', unique: true })
    email: string

    @Column('character varying')
    password: string

    @Column({ type: 'boolean', default: false })
    isAdmin: boolean

    @Column({ type: 'character varying', default: 'https://bit.ly/2WuoBUS' })
    picture: string

    @OneToOne(() => UsersToken, token => token.users, { cascade: true })
    usersToken: UsersToken

}