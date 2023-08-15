import { startServer } from './server';

if (process.env.CURRENT_ENV !== 'test') {
  startServer();
}
