//express = framework que auxilia no processo de requisicao e resposa
import express from 'express';
import './database/connection';//para executar a conexao
import routes from './routes';
import path from 'path';
import 'express-async-errors';
import errorHandler from './errors/handler';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json()); //para utilizar json quando usar o request.body
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);


app.listen(3333);

//REQ / RESP
//localhost:3333