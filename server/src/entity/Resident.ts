import { Model } from "../model/Model"
import { Entity, Column } from "typeorm"


@Entity()
export class Resident extends Model {

    @Column({ type: 'character varying', unique: true, length: 16 })
    nik: string

    @Column({ type: 'character varying', length: 64 })
    name: string

    @Column({ type: 'character varying', length: 64 })
    birthPlace: string

    @Column('date')
    date: Date

    @Column({ type: 'char', length: 1 })
    gender: string

    @Column({ type: 'char', default: '-', length: 3 })
    bloodType: string

    @Column({ type: 'character varying', default: 'KP. DOMAS', length: 64 })
    address: string

    @Column({ type: 'char', length: 3 })
    rt: string

    @Column({ type: 'char', length: 3 })
    rw: string

    @Column({ type: 'character varying', length: 64, default: 'PONTANG' })
    districts: string

    @Column({ type: 'character varying', default: 'DOMAS', length: 64 })
    village: string

    @Column({ type: 'character varying', default: 'ISLAM', length: 32 })
    religion: string

    @Column({ type: 'character varying', length: 64, default: 'BELUM KAWIN' })
    maritalStatus: string

    @Column({ type: 'character varying', length: 64, default: 'BELUM/TIDAK BEKERJA' })
    profession: string

    @Column({ type: 'char', default: 'WNI', length: 3 })
    citizenship: string

    @Column({ type: 'character varying', default: 'SEUMUR HIDUP', length: 64 })
    validUntil: string

}