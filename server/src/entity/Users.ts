import { Entity, Column, OneToOne } from "typeorm"
import { Model } from "../model/Model"
import { UsersToken } from './Token'


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

    @Column({ default: 'https://bit.ly/2WuoBUS' })
    picture: string

    @OneToOne(() => UsersToken, token => token.users, { cascade: true })
    usersToken: UsersToken

}