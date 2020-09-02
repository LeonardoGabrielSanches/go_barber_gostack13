import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    await authenticateUser.execute({ email, password });

    response.json(true);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
});

export default sessionsRouter;
