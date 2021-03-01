import { uuid } from 'uuidv4';

import ILettersRepository from '../ILettersRepository';
import ICreateLetterDTO from '../../dtos/ICreateLetterDTO';

import Letter from '../../infra/typeorm/entities/Letter';

class LettersReppository implements ILettersRepository {
  private letters: Letter[] = [];

  public async findAll(): Promise<Letter> {
    const allLetters = new Letter();

    return allLetters;
  }

  public async findById(id: string): Promise<Letter | undefined> {
    const findLetter = this.letters.find(letter => letter.id === id);

    return findLetter;
  }

  public async create({
    name,
    title,
    letter,
    address,
  }: ICreateLetterDTO): Promise<Letter> {
    const createLetter = new Letter();

    Object.assign(createLetter, { id: uuid(), name, title, letter, address });

    this.letters.push(createLetter);

    return createLetter;
  }
}

export default LettersReppository;
