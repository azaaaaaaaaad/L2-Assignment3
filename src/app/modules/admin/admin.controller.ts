import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { AdminServices } from "./admin.service"
import httpStatus from 'http-status';


const blockUser = catchAsync(async (req, res) => {
    const { userId } = req.params
    const result = await AdminServices.blockUser(userId)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user blocked successfuflly',
        data: result
    })
})

export const AdminControllers = {
    blockUser
}