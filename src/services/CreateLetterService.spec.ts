import FakeLettersRepository from '../repositories/fakes/fakeLettersRepository';
import CreateLetterService from './CreateLetterService';

describe('CreateLetter', () => {
  it('Should create a letter', async () => {
    const fakeLettersRepository = new FakeLettersRepository();
    const createLetter = new CreateLetterService(fakeLettersRepository);

    const letter = await createLetter.execute({
      name: 'John Doe',
      title: 'New Letter',
      letter: 'I was a good boy',
      address: '9 of july street, 25',
    });

    expect(letter).toHaveProperty('id');
  });
});
