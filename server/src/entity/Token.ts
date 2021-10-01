import { Entity, Column, OneToOne } from "typeorm"
import { Model } from "../model/Model"
import { Users } from './Users'


@Entity()
export class Token extends Model {

    @Column({ unique: true })
    refreshToken: string

}