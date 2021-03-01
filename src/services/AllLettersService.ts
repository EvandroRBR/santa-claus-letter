import { inject, injectable } from 'tsyringe';

import ILetterRepository from '../repositories/ILettersRepository';

import Letter from '../infra/typeorm/entities/Letter';

@injectable()
class AllLettersService {
  constructor(
    @inject('LettersRepository')
    private lettersRepository: ILetterRepository,
  ) {}

  public async execute(): Promise<Letter | undefined> {
    const allLetters = await this.lettersRepository.findAll();

    return allLetters;
  }
}

export default AllLettersService;
