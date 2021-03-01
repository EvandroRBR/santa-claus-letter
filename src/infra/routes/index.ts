import { Router } from 'express';

import lettersRouter from '../http/routes/letters.routes';
import sessionRouter from '../http/routes/session.routes';

const routes = Router();

routes.use('/letters', lettersRouter);
routes.use('/session', sessionRouter);

export default routes;
