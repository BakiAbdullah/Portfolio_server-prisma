import { prisma } from "../../configs/db";
import bcryptjs from "bcryptjs";

const loginWithCredentials = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error("Email doest not exists!");
  }

  const passwordMatch = await bcryptjs.compare(
    password as string,
    user.password as string
  );

  if (passwordMatch) {
    return user;
  } else {
    throw new Error("Password is incorrect!");
  }
};

export const AuthServices = {
  loginWithCredentials,
};
