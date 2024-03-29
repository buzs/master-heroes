import next from 'next';
import { createServer } from 'http';
import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const port = process.env.PORT || 3000;

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(port);
});
