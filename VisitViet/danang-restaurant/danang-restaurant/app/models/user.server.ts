import type { User } from "@prisma/client";
import bcrypt from "bcryptjs";

// Models
import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

type UserTypeNew = {
  username: User["username"];
  password: string;
}

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByUsername(username: User["username"]) {
  return prisma.user.findUnique({ where: { username } });
}

export async function createUser({
  username, password,
}: UserTypeNew) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      username: username.trim(),
      role: 0, // Moderator
      passwordHash: hashedPassword
    },
  });
}

export async function verifyLogin(
  username: User["username"],
  password: User["passwordHash"]
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { username },
  });

  if (!userWithPassword || !userWithPassword.passwordHash) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.passwordHash
  );

  if (!isValid) {
    return null;
  }

  const { passwordHash: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}