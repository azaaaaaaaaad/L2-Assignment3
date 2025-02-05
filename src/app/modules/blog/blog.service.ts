import QueryBuilder from '../../builder/QueryBuilder';
import { TUser } from '../user/user.interface';
import { blogSearchableFields } from './blog.constant';
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


const updateBlogIntoDB = async (id: string, payload: Partial<TBlog> = {}) => {
  const { title, content, ...remainingData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingData,
  };

  if (title) {
    modifiedUpdatedData['title'] = title;
  }

  if (content) {
    modifiedUpdatedData['content'] = content;
  }

  const result = await Blog.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id)
  return result
}

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {

  const blogQuery = new QueryBuilder(
    Blog.find(),
    query,
  ).search(blogSearchableFields)
    .sort()
    .filter()


  const result = blogQuery.modelQuery
  return result
}

export const BlogServices = {
  createBlogIntoDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
  getAllBlogsFromDB
};
