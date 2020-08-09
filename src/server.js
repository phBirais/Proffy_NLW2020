//servidor
const express = require('express')
const server = express()

const{
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

const nunjucks = require('nunjucks')
//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//configurar arquivos estaticos
.use(express.static("public")) //transforma a pasta public em pasta raiz para os arquivos
//rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

