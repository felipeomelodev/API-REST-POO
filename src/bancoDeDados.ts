import Autor from "./modelos/Autor"
import Post from "./modelos/Post"

export const autores: Autor[] = []

export const posts: Post[] = [
    new Post({
        titulo: 'Café é bom demais!',
        descricao: 'Descrição do meu post',
        autor: new Autor ({
            nome: 'Martinha',
            idade: 44 
        })
    })
]
