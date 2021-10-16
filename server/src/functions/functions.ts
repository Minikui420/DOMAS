import { Users } from '../entity/Users'
import { Resident } from '../entity/Resident'
import { UsersToken } from '../entity/Token'
import { FamilyCard } from '../entity/FamilyCard'
import { ResidentDetail } from '../entity/ResidentDetail'
import { sign, verify } from 'jsonwebtoken'
import { hash, compare } from 'bcryptjs'
import { Forbidden, NotFound } from '@tsed/exceptions'
import { SECRET_KEY, REFRESH_SECRET_KEY } from '../config/env/index'
import { 
    UserData, Result, DataResident, 
    Token, DataFamily, DataResidentDetail
} from '../interface/interfaces'



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
        nik: data.nik,
        name: data.name,
        birthPlace: data.birthPlace,
        date: data.date,
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

// User

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
        console.log(`${error}`)
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

// FamilyCard

const returnFamily = (family: FamilyCard): DataFamily => {
    return {
        id: family.id,
        no_kk: family.no_kk,
        family_head: family.family_head,
        rt: family.rt,
        rw: family.rw,
        village: family.village,
        districts: family.districts,
        city: family.city,
        zip: family.zip,
        province: family.province
    }
}

export const createFamily = async (dataFamily: DataFamily) => {
    const { 
        no_kk, family_head, rt,
        rw, village, districts,
        city, zip, province
    } = dataFamily
    try {
        const family = FamilyCard.create({
            no_kk, family_head, rt,
            rw, village, districts,
            city, zip, province
        })
        const result: FamilyCard = await family.save()
        return returnFamily(result)
    } catch (error) {
        console.log(`${error}`)
    }

}

// ResidentDetail

export const createResidentDetail = async (dataResidentDetail: DataResidentDetail) => {
    const { 
        id, name, nik, birthPlace,
        date, gender, religion,
        education, professionType,
        maritalStatus, statusInFamily,
        no_passpor, no_kitas_kitap,
        fatherName, motherName
    } = dataResidentDetail
    try {
        const familyCard  = await FamilyCard.findOne({ id })
        const residentDetail = ResidentDetail.create({
            name, nik, birthPlace,
            date, gender, religion,
            education, professionType,
            maritalStatus, statusInFamily,
            no_passpor, no_kitas_kitap,
            fatherName, motherName,
            familyCard
        })
        const result = await residentDetail.save()
        return result
    } catch (error) {
        console.log(`${error}`)
        throw new Forbidden('Filed to add')
    }
}




// Resident (KTP)

export const createResident = async (dataResident: DataResident) => {
    const {
        nik, name, birthPlace, date,
        gender, bloodType, address, rt, rw,
        districts, village, religion, maritalStatus,
        profession, citizenship, validUntil,
    } = dataResident
    try {
        const resident = Resident.create({
            nik, name, birthPlace, date,
            gender, bloodType, address, rt, rw,
            districts, village, religion, maritalStatus,
            profession, citizenship, validUntil
        })
        const result: Resident = await resident.save()
        return returnResident(result)
    } catch(error) {
        console.log(error)
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
    result.nik = data.nik || result.nik
    result.name = data.name || result.name
    result.birthPlace = data.birthPlace || result.birthPlace
    result.date = data.date || result.date
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