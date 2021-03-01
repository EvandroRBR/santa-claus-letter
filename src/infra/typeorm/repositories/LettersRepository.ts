import { getRepository, Repository } from 'typeorm';

import ILettersRepository from '../../../repositories/ILettersRepository';
import ICreateLetterDTO from '../../../dtos/ICreateLetterDTO';

import Letter from '../entities/Letter';

class LettersReppository implements ILettersRepository {
  private ormRepository: Repository<Letter>;

  constructor() {
    this.ormRepository = getRepository(Letter);
  }

  public async findAll(): Promise<Letter> {
    const letters = await this.ormRepository.find();

    return letters;
  }

  public async findById(id: string): Promise<Letter | undefined> {
    const letter = await this.ormRepository.findOne(id);

    return letter;
  }

  public async create({
    name,
    title,
    letter,
    address,
  }: ICreateLetterDTO): Promise<Letter> {
    const createLetter = this.ormRepository.create({
      name,
      title,
      letter,
      address,
    });

    await this.ormRepository.save(createLetter);

    return createLetter;
  }
}

export default LettersReppository;
