import { UserData, Result, DataResident, Token } from '../interface/interfaces'
import { Forbidden, NotFound } from '@tsed/exceptions'
import { Users } from '../entity/Users'
import { UsersToken } from '../entity/Token'
import { hash, compare } from 'bcryptjs'
import { Resident } from '../entity/Resident'
import { sign, verify } from 'jsonwebtoken'
import { SECRET_KEY, REFRESH_SECRET_KEY } from '../config/env/index'
// import { getConnection } from 'typeorm'

// export const repository = getConnection('default').manager

// authentication

export const createAccessToken = (user: UserData): string => {
    const { id, username, picture, isAdmin, createdAt } = user
    return sign({ id, username, picture, isAdmin, createdAt }, SECRET_KEY!, { expiresIn: '20s' })
}

export const refreshAccessToken = (user: UserData): string => {
    const { id, username, picture, isAdmin, createdAt } = user
    return sign({ id, username, picture, isAdmin, createdAt }, REFRESH_SECRET_KEY!)
}

const authValidator = async (users: Users) => {
    const data = returnData(users)
    const token = createAccessToken(data)
    const refreshToken = refreshAccessToken(data)
    try {
        const isTokenExist = await UsersToken.findOne({ users })
        if(!isTokenExist) {
            const userToken = UsersToken.create({
                refreshToken,
                users
            })
            const result = await userToken.save()
            return { token, refreshToken: result.refreshToken }
        }
        return { 
            token, 
            refreshToken: isTokenExist.refreshToken 
        }
    } catch (error) {
        console.log(`${error}`)
        return { message: `Error!` }
    }
}

// decorator

export const returnData = (data: UserData): Result => {
    return {
        id: data.id,
        username: data.username!,
        isAdmin: data.isAdmin!,
        picture: data.picture,
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
        const { password, username, email, isAdmin } = userData
        const hased: string = await hash(password!, 10)
        const user: Users = Users.create({
            username, email,
            password: hased,
            isAdmin
        })
        const data: Users = await user.save()
        return await authValidator(data)
    } catch (error) {
        console.log(error)
        throw new Forbidden('Email already exist...')
    }
}

export const getUser = async (userData: UserData) => {
    const { email, password } = userData
    const isExist = await Users.findOne({ email })
    if (!isExist) throw new NotFound(`Email not found!`)
    const isValid: boolean = await compare(password!, isExist.password)
    if (!isValid) throw new Forbidden('Wrong password!')
    return await authValidator(isExist)
}

export const isValidUser = async (token: Token) => {
    const result = await Users.findOne({ id: token.id })
    return authValidator(result!)
    
}

export const refreshToken = async (refresh: Token) => {
    const { refreshToken } = refresh
    return verify(refreshToken!, REFRESH_SECRET_KEY!, (error, data: UserData) => {
        if(error) {
            const res = new Forbidden('Something error...')
            throw { message: res.message, status: res.status }
        }
        const { id, username, isAdmin, picture, createdAt } = data
        const newToken = createAccessToken({ id, username, isAdmin, picture, createdAt })
        return { token: newToken }
    })
}

export const createResident = async (dataResident: DataResident) => {
    const {
        kk, nik, name,
        place_dateOfBirth, gender,
        bloodType, rt, rw,
        profession, maritalStatus
    } = dataResident
    try {
        const resident = Resident.create({
            kk, nik, name, 
            place_dateOfBirth, gender,
            bloodType, rt, rw, maritalStatus,
            profession
        })
        const result: Resident = await resident.save()
        return returnResident(result)
    } catch {
        throw new Forbidden('NIK already exist...')
    }
}

export const getResident = async (result: Result) => {
    const { id } = result
    const isResident = await Resident.findOne({ id })
    if (!isResident) throw new NotFound(`Data not found!`)
    return returnResident(isResident)
}

export const editResident = async (data: DataResident) => {
    const { id } = data
    const result = await Resident.findOne({ id })
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
    await Resident.save(result)
    return returnResident(result)
}