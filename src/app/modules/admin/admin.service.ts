import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import httpStatus from 'http-status';


const blockUser = async (userId: string) => {
    const user = await User.findById(userId)
    if (!user) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'you are not authorized')
    }

    if (user.isBlocked) {
        throw new AppError(httpStatus.BAD_REQUEST, 'User is already blocked');
    }

    user.isBlocked = true
    await user.save()
    return user
}


export const AdminServices = {
    blockUser
}