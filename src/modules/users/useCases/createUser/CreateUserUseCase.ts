import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import AppError from '../../../../errors/AppError'
interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const exists = this.usersRepository.findByEmail(email);

    if (exists) {
      throw new AppError('User does not exists', 400);
    }

    const user = this.usersRepository.create({ name, email });

    return user;

  }
}

export { CreateUserUseCase };
