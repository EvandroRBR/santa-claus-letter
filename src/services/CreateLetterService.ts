import { injectable, inject } from 'tsyringe';

import ILettersRepository from '../repositories/ILettersRepository';
import ICreateLetterDTO from '../dtos/ICreateLetterDTO';

import Letter from '../infra/typeorm/entities/Letter';

@injectable()
class CreateLetterService {
  constructor(
    @inject('LettersRepository')
    private lettersRepository: ILettersRepository,
  ) {}

  public async execute({
    title,
    letter,
    name,
    address,
  }: ICreateLetterDTO): Promise<Letter> {
    const createLetter = await this.lettersRepository.create({
      title,
      letter,
      name,
      address,
    });

    return createLetter;
  }
}

export default CreateLetterService;
