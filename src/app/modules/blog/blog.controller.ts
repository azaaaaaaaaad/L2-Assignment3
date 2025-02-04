import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status"
import { BolgServices } from "./blog.service";
import sendResponse from "../../utils/sendResponse";

const createBlog = catchAsync(async (req, res) => {
    const {password, blog: blogData} = req.body;
    const result = await BolgServices.createBlogIntoDB(password, blogData);
    sendResponse(res, {
      success: true,
      message: 'Blog created successfully',
      statusCode: httpStatus.CREATED,
      data: result
    });
  });

export const BlogControllers = {
    createBlog
}