import { UserData, Result, DataResident, Token } from '../interface/interfaces'
import { Forbidden, NotFound } from '@tsed/exceptions'
import { Users } from '../entity/Users'
import { hash, compare } from 'bcryptjs'
import { Resident } from '../entity/Resident'
import { getConnection } from 'typeorm'
import { sign, verify } from 'jsonwebtoken'
import { SECRET_KEY, REFRESH_SECRET_KEY } from '../config/env/index'


export const repository = getConnection('default').manager

// authentication

export const createAccessToken = (user: UserData): string => {
    return sign(user, SECRET_KEY!, { expiresIn: '60s' })
}

export const refreshAccessToken = (user: UserData): string => {
    return sign(user, REFRESH_SECRET_KEY!, { expiresIn: '7d' })
}

const authValidator = (user: UserData) => {
    const data = returnData(user)
    const token = createAccessToken(data)
    const refreshToken = refreshAccessToken(data)
    return { ...data, token, refreshToken }
}


// decorator

export const returnData = (data: UserData): Result => {

    return {
        id: data.id,
        username: data.username!,
        admin: data.admin!,
        createdAt: data.createdAt!
    }
}

export const returnResident = (data: DataResident): DataResident => {
    return {
        id: data.id,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        kk: data.kk,
        nik: data.nik,
        name: data.name,
        place_dateOfBirth: data.place_dateOfBirth,
        gender: data.gender,
        bloodType: data.bloodType,
        address: data.address,
        rt: data.rt,
        rw: data.rw,
        districts: data.districts,
        village: data.village,
        religion: data.religion,
        maritalStatus: data.maritalStatus,
        profession: data.profession,
        citizenship: data.citizenship,
        validUntil: data.validUntil
    }
}

export const create = async (userData: UserData) => {
    try {
        const { password, username, email, admin } = userData
        const user: Users = new Users()
        const hased: string = await hash(password!, 10)
        user.username = username!
        user.email = email!
        user.password = hased
        user.isAdmin = admin!
        const data: Users = await repository.save(user)
        return authValidator(data)
    } catch (error) {
        console.log(error)
        throw new Forbidden('Email already exist...')
    }
}

export const getUser = async (userData: UserData) => {
    const { email, password } = userData
    const isExist = await repository.findOne(Users, { email })
    if (!isExist) throw new NotFound(`Email not found!`)
    const isValid: boolean = await compare(password!, isExist.password)
    if (!isValid) throw new Forbidden('Wrong password!')
    return authValidator(isExist)
}

export const isValidUser = async (token: Token) => {
    const result = await repository.findOne(Users, { id: token.id })
    return authValidator(result!)
    
}

export const refreshToken = (refresh: Token) => {
    const { token } = refresh
    return verify(token!, REFRESH_SECRET_KEY!, (error, data: UserData) => {
        if(error) {
            const res = new Forbidden('Something error...')
            throw { message: res.message, status: res.status }
        }
        const { id, username, createdAt } = data
        const newToken = createAccessToken({ id, username, createdAt })
        return { token: newToken }
    })
}

export const createResident = async (dataResident: DataResident) => {
    const {
        id, kk, nik, name,
        place_dateOfBirth, gender,
        bloodType, rt, rw,
        profession, maritalStatus
    } = dataResident
    try {
        const resident = new Resident()
        resident.kk = kk!
        resident.nik = nik!
        resident.name = name!
        resident.place_dateOfBirth = place_dateOfBirth!
        resident.gender = gender!
        resident.bloodType = bloodType!
        resident.rt = rt!
        resident.rw = rw!
        resident.maritalStatus = maritalStatus!
        resident.profession = profession!
        const result: Resident = await repository.save(resident)
        return returnResident(result)
    } catch {
        throw new Forbidden('NIK already exist...')
    }
}

export const getResident = async (result: Result) => {
    const { id } = result
    const isResident = await repository.findOne(Resident, { id })
    if (!isResident) throw new NotFound(`Data not found!`)
    return returnResident(isResident)
}

export const editResident = async (data: DataResident) => {
    const { id } = data
    const result = await repository.findOne(Resident, { id })
    if(!result) throw new NotFound('Data not found!')
    result.kk = data.kk || result.kk
    result.nik = data.nik || result.nik
    result.name = data.name || result.name
    result.place_dateOfBirth = data.place_dateOfBirth || result.place_dateOfBirth
    result.gender = data.gender || result.gender
    result.bloodType = data.bloodType || result.bloodType
    result.address = data.address || result.address
    result.rt = data.rt || result.rt
    result.rw = data.rw || result.rw
    result.districts = data.districts || result.districts
    result.village = data.districts || result.village
    result.religion = data.religion || result.religion
    result.maritalStatus = data.maritalStatus || result.maritalStatus
    result.profession = data.profession || result.profession
    result.citizenship = data.citizenship || result.citizenship
    result.validUntil = data.validUntil || result.validUntil
    await repository.save(result)
    return returnResident(result)
}