import 'reflect-metadata'
import { UserData } from '../interface/interfaces'
import { connection } from '../config/ormconfig'
import { 
    returnData,  getUser, getResident,
    create, createResident, editResident,
    isValidUser, refreshToken
} from '../functions/functions'



const userParamsMetadataKey = Symbol("userparams")

// parmas decor
export const UserParams = (Params: any) => {
    return (target: Object, propertyKey: string | symbol, parameter: any) => {
        Reflect.defineMetadata(userParamsMetadataKey, Params, target, propertyKey)
    }

}


// method decor
export const FilterResult = () => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const { value } = descriptor
        descriptor.value = async (...args: any[]) => {
            const user: UserData = await value.apply(this, args)
            return returnData(user)
        }
    }
}

export const ClientRequest = () => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const { value } = descriptor
        descriptor.value = async (...args: any[]) => {
            const data = await value.apply(this, args)

            return connection.then(async () => {
                switch (propertyKey) {

                    //Users
                    case 'getUser':
                        return getUser(data)

                    case 'create':
                        return create(data)
                    
                    case 'refreshToken':
                        return refreshToken(data)

                    // Resident
                    case 'createResident':
                        return createResident(data)

                    case 'getResident':
                        return getResident(data)

                    case 'editResident':
                        return editResident(data)

                    case 'isValidUser':
                        return isValidUser(data)

                    default:
                        break;
                }

            }).catch(error => {
                throw ({ message: error.message, status: error.status })
            })

        }
    }
}




