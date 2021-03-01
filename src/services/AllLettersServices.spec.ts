import FakeLettersRepository from '../repositories/fakes/fakeLettersRepository';
import AllLettersService from './AllLettersService';

describe('AllLetters', () => {
  it('Should show all letter created', async () => {
    const fakeLettersRepository = new FakeLettersRepository();
    const letters = new AllLettersService(fakeLettersRepository);

    const Allletters = await letters.execute();

    expect(Allletters);
  });
});
