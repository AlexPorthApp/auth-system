import { randomUUID } from "crypto";

import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";
import { BcryptService } from "../../infrastructure/security/BcryptService";

export class RegisterUser {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string, password: string) {
    const existingUser = await this.userRepository.findByEmail(email);
    
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await BcryptService.hashPassword(password);
    const user = new User(randomUUID(), name, email, hashedPassword);

    return this.userRepository.create(user);
  }
}
