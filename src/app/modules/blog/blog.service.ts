import { TUser } from '../user/user.interface';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (password: string, payload: TBlog) => {
  const userData: Partial<TUser> = {};
  //if pass not given
  userData.password = password;
  // set role
  userData.role = 'user';

  const result = await Blog.create(payload);
  return result;

};

export const BolgServices = {
  createBlogIntoDB,
};
