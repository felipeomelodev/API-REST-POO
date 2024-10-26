import { Router } from 'express'
import AutorControlador from './controladores/AutorControlador'
import PostControlador from './controladores/PostControlador'

const rotas = Router()

const autorControlador = new AutorControlador()
const postcontrolador = new PostControlador()

rotas.get('/autores', autorControlador.listar)
rotas.get('/autores/:id', autorControlador.detalhar)
rotas.post('/autores', autorControlador.cadastrar)
rotas.put('/autores/:id', autorControlador.editar)
rotas.delete('/autores/:id', autorControlador.excluir)

rotas.get('/postagens', postcontrolador.listar)


export default rotas
