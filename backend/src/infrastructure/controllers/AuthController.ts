import { Request, Response } from "express";

import { RegisterUser } from "../../application/useCases/RegisterUser";
import { LoginUser } from "../../application/useCases/LoginUser";
import { UserRepositoryImpl } from "../repositories/UserRepositoryImpl";

const userRepository = new UserRepositoryImpl();
const registerUser = new RegisterUser(userRepository);
const loginUser = new LoginUser(userRepository);

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const user = await registerUser.execute(name, email, password);

      res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Unknown error occurred' });
      }
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      
      const { user, token } = await loginUser.execute(email, password);
      
      res.status(200).json({ user, token });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(401).json({ error: error.message });
      } else {
        res.status(401).json({ error: 'Unknown error occurred' });
      }
    }
  }
}
