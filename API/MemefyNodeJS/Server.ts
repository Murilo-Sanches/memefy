import { App } from './source/App';

const PORT = Number(process.env.PORT) || 5555;

const server = new App(PORT);

server.listen();
