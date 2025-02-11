import jwt from "jsonwebtoken";

import { UserRepository } from "../../domain/repositories/UserRepository";
import { BcryptService } from "../../infrastructure/security/BcryptService";

export class LoginUser {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new Error("Invalid credentials");

    const isPasswordValid = await BcryptService.comparePasswords(password, user.password);
    
    if (!isPasswordValid) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return { user, token };
  }
}
