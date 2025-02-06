import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { AdminServices } from "./admin.service"
import httpStatus from 'http-status';


const adminBlockUser = catchAsync(async (req, res) => {
    const { userId } = req.params
    const result = await AdminServices.blockUser(userId)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user blocked successfuflly',
        data: result
    })
})

const adminDeleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params
    const result = await AdminServices.deleteBlog(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog deleted successfully',
        data: result
    })
})

export const AdminControllers = {
    adminBlockUser,
    adminDeleteBlog
}