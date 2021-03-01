import Letter from '../infra/typeorm/entities/Letter';
import ICreateLetterDTO from '../dtos/ICreateLetterDTO';

export default interface ILettersRepository {
  findAll(): Promise<Letter>;
  findById(id: string): Promise<Letter | undefined>;
  create(data: ICreateLetterDTO): Promise<Letter>;
}
