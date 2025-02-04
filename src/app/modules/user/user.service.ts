import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import config from '../../config';
import { createToken } from './user.utils';

const createUserIntoDB = async (payload: TUser) => {
  const hashedPassword = await bcrypt.hash(
    payload?.password,
    Number(config.bcrypt_salt_rounds),
  );

  payload?.password = hashedPassword;

  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const isUserExist = await User.findOne({ email: payload?.email });
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }

  const userStatus = isUserExist?.isBlocked;
  if (userStatus === true) {
    throw new AppError(httpStatus.FORBIDDEN, 'user is blocked');
  }

  const isPasswordCorrect = await bcrypt.compare(
    payload?.password,
    isUserExist?.password,
  );
  if (!isPasswordCorrect) {
    throw new AppError(httpStatus.BAD_REQUEST, 'password did not matched');
  }

  const jwtPayload = {
    userId: isUserExist?.id,
    role: isUserExist?.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return { accessToken };
};

export const UserServices = {
  createUserIntoDB,
  loginUser,
};
