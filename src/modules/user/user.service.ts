import { prisma } from "../../configs/db";

const getAllUsersFromDB = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      role: true,
      email: true,
      phone: true,
      blogs: true,
    },
  });
  return result;
};

const deleteUserFromDB = async (id:number) => {
  const res = await prisma.user.delete({
    where: {
      id: id
    }
  })
  return res
}

export const UserService = {
  getAllUsersFromDB,
  deleteUserFromDB,
};
