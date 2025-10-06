import { prisma } from "../../configs/db";

const createProject = async (projectData: any) => {
  const project = await prisma.project.create({
    data: projectData,
    include: {
      author: {
        select: {
          name: true,
          email: true,
          phone: true,
        },
      },
    },
  });
  return project;
};

// Get All projects
const getAllProjectsFromDB = async () => {
  const result = await prisma.project.findMany({
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

// Get Single Projects
const getSingleProjectById = async (id: number) => {
  const result = await prisma.project.findUnique({
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



export const ProjectServices = {
  createProject,
  getAllProjectsFromDB,
  getSingleProjectById
};
