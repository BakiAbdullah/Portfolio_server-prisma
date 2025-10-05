import { prisma } from "../../configs/db";

const createBlog = async (blogData: any) => {
  const newlyCreatedBlog = await prisma.blog.create({
    data: blogData,
    include: {
      author: {
        select: {
          name: true,
          email: true,
          phone: true,
          blogs: true,
        },
      },
    },
  });
  return newlyCreatedBlog;
};

// Get All Blogs
const getAllBlogsFromDB = async () => {
  const result = await prisma.blog.findMany({
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return result;
};

// Get Single Blogs
const getSingleBlogById = async (id: number) => {
  const result = await prisma.blog.findUnique({
    where: {
      id: id,
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return result;
};

// Update a Blog
const updateBlog = async (id: number, payload: any) => {
  const updatedBlog = await prisma.blog.update({
    where: {
      id: id,
    },
    data: payload
  })
  return updatedBlog;
};

// Delete a Blog
const deleteBlogById = async (id: number) => {
  const result = await prisma.blog.delete({
    where: {
      id: id
    }
  })
  return result;
};

export const BlogServices = {
  createBlog,
  getAllBlogsFromDB,
  getSingleBlogById,
  updateBlog,
  deleteBlogById,
};
