import { TUser } from "./user.interface"
import { User } from "./user.model"

const createUserIntoDB = async(payload: TUser)=>{
    const result = await User.create(payload)
    return result
}

const createLogin = async()=> {

}


export const UserServices = {
    createUserIntoDB,
    createLogin
}