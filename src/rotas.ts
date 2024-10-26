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
rotas.get('/postagens/:id', postcontrolador.detalhar)
rotas.post('/postagens', postcontrolador.cadastrar)
rotas.patch('/postagens/:id', postcontrolador.editar)
rotas.delete('/postagens/:id', postcontrolador.excluir)

export default rotas
