import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await UserServices.createUserIntoDB(payload);
  sendResponse(res, {
    success: true,
    message: 'user is created successful',
    statusCode: httpStatus.OK,
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
