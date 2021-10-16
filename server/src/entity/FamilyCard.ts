import { Model } from "../model/Model"
import { ResidentDetail } from "./ResidentDetail"
import { Entity, Column, OneToMany, JoinColumn } from "typeorm"


@Entity()
export class FamilyCard extends Model {

    @Column({ type: 'character varying', unique: true, length: 16 })
    no_kk: string

    @Column({ type: 'character varying', length: 64, default:'KP. DOMAS' })
    address: string

    @Column({ type: 'character varying', length: 64 })
    family_head: string

    @Column({ type: 'char', length: 3 })
    rt: string

    @Column({ type: 'char', length: 3 })
    rw: string

    @Column({ type: 'character varying', length: 32, default: 'DOMAS' })
    village: string

    @Column({ type: 'character varying', length: 64, default: 'PONTANG' })
    districts: string

    @Column({ type: 'character varying', default: 'SERANG', length: 64 })
    city: string

    @Column({ type: 'character varying', default: '42192', length: 8 })
    zip: string

    @Column({ type: 'character varying', length: 64, default: 'BANTEN' })
    province: string

    @OneToMany(() => ResidentDetail, residentDetail => residentDetail.familyCard)
    @JoinColumn()
    redsidentDetail: ResidentDetail[]

}
