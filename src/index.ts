<<<<<<< HEAD
import express from 'express';
import cors from 'cors';
import routersUsers from './core/users/users-api';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

const app = express();
const port = 3000;

createConnection();

app.use(cors());
app.use (express.json());
app.use('/api', routersUsers)

app.get('/', (req, res) => {
  res.send('Bienvenido')
});

app.listen(port, () => {
  console.log(`API REST se escucha en http://localhost:${port}`)
});
=======
import express from 'express';
import cors from 'cors';
import routersUsers from './core/users/users-api';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

const app = express();
const port = 3000;

createConnection();

app.use(cors());
app.use (express.json());
app.use('/api', routersUsers)

app.get('/', (req, res) => {
  res.send('Bienvenido')
});

app.listen(port, () => {
  console.log(`API REST se escucha en http://localhost:${port}`)
});
>>>>>>> ab0f2bdbbf6de442d61fe53a1f48585a95031836
