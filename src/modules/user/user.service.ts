import { prisma } from "../../configs/db";

const getAllUsersFromDB = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      blogs: true,
    },
  });
  return result;
};

export const UserService = {
  getAllUsersFromDB,
};
