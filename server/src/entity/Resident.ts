import { Entity, Column } from "typeorm"
import { Model } from "../model/Model"


@Entity()
export class Resident extends Model {

    @Column({ length: 16 })
    kk: string

    @Column({ unique: true, length: 16 })
    nik: string

    @Column({ length: 64 })
    name: string

    @Column({ length: 64 })
    place_dateOfBirth: string

    @Column({ type: 'char', length: 1 })
    gender: string

    @Column({ type: 'char', default: '-', length: 3 })
    bloodType: string

    @Column({ default: 'KP. DOMAS', length: 64 })
    address: string

    @Column({ type: 'char', length: 3 })
    rt: string

    @Column({ type: 'char', length: 3 })
    rw: string

    @Column({ length: 64, default: 'PONTANG' })
    districts: string

    @Column({ default: 'DOMAS', length: 64 })
    village: string

    @Column({ default: 'ISLAM', length: 32 })
    religion: string

    @Column({ length: 64 })
    maritalStatus: string

    @Column({ length: 64 })
    profession: string

    @Column({ type: 'char', default: 'WNI', length: 3 })
    citizenship: string

    @Column({ default: 'SEUMUR HIDUP', length: 64 })
    validUntil: string

}
