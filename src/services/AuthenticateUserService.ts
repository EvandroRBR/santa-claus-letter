import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import { uuid } from 'uuidv4';

import authConfig from '../config/auth';
import AppError from '../errors/AppError';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IUser {
  userName: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    userName: string;
    password: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ userName, password }: IUser): Promise<IResponse> {
    const hashedPassword = await this.hashProvider.generateHash('noel123');
    const userAdm = {
      id: uuid(),
      userName: 'Papai Noel',
      password: hashedPassword,
    };

    const user = { id: userAdm.id, userName, password };

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      userAdm.password,
    );

    if (userName !== 'Papai Noel') {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
