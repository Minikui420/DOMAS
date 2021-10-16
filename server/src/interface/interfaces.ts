
export interface Token {
    id?: string
    token?: string,
    refreshToken?: string
    picture?: string
}

export interface UserData extends Token {
    username?: string
    email?: string
    password?: string
    isAdmin?: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface Result extends Token {
    username: string
    isAdmin: boolean
    createdAt: Date
}

export interface DataFamily {
    id?: string
    no_kk?: string
    family_head?: string
    rt?: string
    rw?: string
    village?: string
    districts?: string
    city?: string
    zip?: string
    province?: string
}

export interface DataResidentDetail {
    id?: string // for KK ID
    name?: string
    nik?: string
    birthPlace?: string
    date?: Date
    gender?: string
    religion?: string
    education?: string
    professionType?: string
    maritalStatus?: string
    statusInFamily?: string
    no_passpor?: string
    no_kitas_kitap?: string
    fatherName?: string
    motherName?: string
}

export interface DataResident {
    id?: string
    createdAt?: Date
    updatedAt?: Date
    nik?: string
    name?: string
    birthPlace?: string
    date?: Date
    gender?: string
    bloodType?: string
    address?: string
    rt?: string
    rw?: string
    districts?: string
    village?: string
    religion?: string
    maritalStatus?: string
    profession?: string
    citizenship?: string
    validUntil?: string
}

