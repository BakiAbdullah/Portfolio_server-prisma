import { Role } from "@prisma/client";
import { prisma } from "../configs/db";
import bcryptjs from "bcryptjs";

export const seedAdmin = async () => {
  try {
    const isAdminExist = await prisma.user.findUnique({
      where: {
        email: process.env.ADMIN_EMAIL,
      },
    });

    if (isAdminExist) {
      console.log("Admin already exists.");
      return;
    }

    console.log("Seeding admin...");

    const hashedPassword = await bcryptjs.hash(
      process.env.ADMIN_PASSWORD as string,
      Number(process.env.BCRYPT_SALT_ROUNDS)
    );

    const payload = {
      name: "Admin",
      email: process.env.ADMIN_EMAIL as string,
      phone: "01703699999",
      password: hashedPassword,
      role: Role.ADMIN 
    };

    const admin = await prisma.user.create({ data: payload });

    console.log("Admin seeded successfully:", admin.email);
    console.log(admin);
  } catch (error) {
    console.error("Error seeding admin:", error);
  }
};
