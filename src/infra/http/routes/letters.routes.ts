import { Router } from 'express';

import LettersController from '../controllers/LettersController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const lettersRouter = Router();
const lettersConttroller = new LettersController();

lettersRouter.post('/', lettersConttroller.create);

lettersRouter.get('/', ensureAuthenticated, lettersConttroller.index);
lettersRouter.get('/:id', ensureAuthenticated, lettersConttroller.show);

export default lettersRouter;
