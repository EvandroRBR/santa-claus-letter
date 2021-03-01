import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AllLettersService from '../../../services/AllLettersService';
import ShowLetterService from '../../../services/ShowLetterService';
import CreateLetterService from '../../../services/CreateLetterService';

export default class LettersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const letters = container.resolve(AllLettersService);

    const allLetters = await letters.execute();

    return response.json(allLetters);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const letterId = request.params.id;

    const showLetter = container.resolve(ShowLetterService);

    const letter = await showLetter.execute({ letterId });

    return response.json(letter);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, title, letter, address } = request.body;

    const createLetter = container.resolve(CreateLetterService);

    const newLetter = await createLetter.execute({
      name,
      title,
      letter,
      address,
    });

    return response.json(newLetter);
  }
}
