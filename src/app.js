// importando o modulo
import express from 'express'
import bodyParser from 'body-parser'
import { routes } from './routes'

// inicializando o modulo express
const app = express()

// configurando o express para usar o modulo body-parser
app.use(bodyParser.json())

// configurando as rotas disponiveis
app.use(routes)

// abrindo a porta 300 e colocando a aplicação para rodar
app.listen(3001, () => console.log('API is running!'))
