import { Model } from "../model/Model"
import { FamilyCard } from "./FamilyCard"
import { Entity, Column, ManyToOne } from "typeorm"

@Entity()
export class ResidentDetail extends Model {

    @Column({ type: 'character varying', length: 64 })
    name: string

    @Column({ type: 'character varying', length: 16 })
    nik: string

    @Column({ type: 'character', length: 1 })
    gender: string

    @Column({ type: 'character varying', length: 32, default: 'SERANG' })
    birthPlace: string

    @Column({ type: 'date' })
    date: Date

    @Column({ type: 'character varying', length: 32 })
    religion: string

    @Column({ type: 'character varying', length: 64 })
    education: string

    @Column({ type: 'character varying', length: 64 })
    professionType: string

    @Column({ type: 'character varying', length: 64, default: 'BELUM KAWIN' })
    maritalStatus: string

    @Column({ type: 'character varying', length: 64 })
    statusInFamily: string

    @Column({ type: 'character varying', default: '-', length: 64 })
    no_passpor: string

    @Column({ type: 'character varying', default: '-', length: 64 })
    no_kitas_kitap: string

    @Column({ type: 'character varying', length: 64 })
    fatherName: string

    @Column({ type: 'character varying', length: 64 })
    motherName: string

    @ManyToOne(() => FamilyCard, familyCard => familyCard.redsidentDetail, { onDelete: 'CASCADE' })
    familyCard: FamilyCard

}
