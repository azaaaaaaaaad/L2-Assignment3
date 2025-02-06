import AppError from "../../errors/AppError";
import { Blog } from "../blog/blog.model";
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

const deleteBlog = async (id: string) => {
    const blog = await Blog.findById(id)
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'blog not found')
    }

    const result = await Blog.findByIdAndDelete(id)
    return result
}


export const AdminServices = {
    blockUser,
    deleteBlog
}