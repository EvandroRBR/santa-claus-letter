import { inject, injectable } from 'tsyringe';

import AppError from '../errors/AppError';
import ILetterRepository from '../repositories/ILettersRepository';

import Letter from '../infra/typeorm/entities/Letter';

interface IRequest {
  letterId: string;
}

@injectable()
class ShowLetterService {
  constructor(
    @inject('LettersRepository')
    private lettersRepository: ILetterRepository,
  ) {}

  public async execute({ letterId }: IRequest): Promise<Letter | undefined> {
    const letter = await this.lettersRepository.findById(letterId);

    if (!letter) {
      throw new AppError('Letter does not found', 404);
    }

    return letter;
  }
}

export default ShowLetterService;
