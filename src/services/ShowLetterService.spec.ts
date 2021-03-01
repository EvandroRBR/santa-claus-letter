import AppError from '../errors/AppError';

import FakeLettersRepository from '../repositories/fakes/fakeLettersRepository';
import ShowLetterService from './ShowLetterService';
import CreateLetterService from './CreateLetterService';

describe('ShowLetter', () => {
  it('Should show one letter finding by id', async () => {
    const fakeLettersRepository = new FakeLettersRepository();
    const findLetter = new ShowLetterService(fakeLettersRepository);
    const createLetter = new CreateLetterService(fakeLettersRepository);

    const letter = await createLetter.execute({
      name: 'John Doe',
      title: 'New Letter',
      letter: 'I was a good boy',
      address: '9 of july street, 25',
    });

    const letterId = letter.id;

    const showLetter = await findLetter.execute({ letterId });

    expect(showLetter);
  });

  it('Should not find a letter', async () => {
    const fakeLettersRepository = new FakeLettersRepository();
    const findLetter = new ShowLetterService(fakeLettersRepository);

    const letterId = '123';

    expect(findLetter.execute({ letterId })).rejects.toBeInstanceOf(AppError);
  });
});
