import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🍾 Server started on port 3333!');
});

// docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

// docker start $id/nome

// dbeaver -> password: docker -> Show all database

// dbeaver -> Clica na minha conexão -> create database -> gostack_gobarber
