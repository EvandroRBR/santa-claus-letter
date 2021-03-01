import { container } from 'tsyringe';

import ILettersRepository from '../repositories/ILettersRepository';
import LettersReppository from '../infra/typeorm/repositories/LettersRepository';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '../providers/HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<ILettersRepository>(
  'LettersRepository',
  LettersReppository,
);

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
