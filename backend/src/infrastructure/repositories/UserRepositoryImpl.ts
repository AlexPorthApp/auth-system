import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

const prisma = new PrismaClient();

export class UserRepositoryImpl implements UserRepository {
  async create(user: User): Promise<User> {
    return prisma.users.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.users.findUnique({ where: { email } });
  }
}
