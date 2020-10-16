//rota = é o conjunto
//recurso = users(usuarios)
//metodo HTTP = GET. POST, PUT, DELETE
//GET - busar informacao(lista, item)
//o browser sempre usa o metodo get, para fazer o post usamos o postman ou insomnia
//POST - criar uma informação 
//PUT - editando uma informacao
//Delete - deletar uma informação
//paramentros:
//Query parms - enviados na propria rota - usado para filtros / paginacao
//ex: http://localhost:3333/users?searhc=mauricio&page=2
//route parms - enviados na propria rota, mas com um parametro para identificar um recurso
//ex: http://localhost:3333/1 (identifica o recurso a ser deletado)
//body - que é o corpo da requisicao, usado quando nao cabe a informacao nos outros parms
//normalmente vindos de formularios(criacao de um usuario, vem todas as informcaoes)
//ex: http://localhost:3333/users
//no request.query vem todos as informacaoes
//no request.route vem todos as informacaoes
//no request.body vem todos as informacaoes
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController'


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes; 