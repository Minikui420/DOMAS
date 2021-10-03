
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
    admin?: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface Result extends Token {
    username: string
    admin: boolean
    createdAt: Date
}

export interface DataResident {
    id?: string
    createdAt?: Date
    updatedAt?: Date
    kk?: string
    nik?: string
    name?: string
    place_dateOfBirth?: string
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

