//dados
const proffys = [
    //{name, avatar, whatsapp, bio, subject, cost, weekday, time_from, time_to}
    {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "989889897",
    bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"Química",
    cost:"20",
    weekday:[0], 
    time_from:[720],
    time_to:[1220] 
    },
    {
    name: "Daniele Evangelista",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "989889897",
    bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject:"Química",
    cost:"20",
    weekday:[1], 
    time_from:[720],
    time_to:[1220] 
    },
    {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "989889897",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost:"20",
        weekday:[1], 
        time_from:[720],
        time_to:[1220] 
    }         
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}


function pageLanding(req,res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays}) 
}

function pageGiveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length >0
    //se tiver dados
    if(isNotEmpty){

        data.subject = getSubject(data.subject)
        //add dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }


    //senão, não adicionar

    return res.render("give-classes.html", {subjects, weekdays}) 
}

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
//configurar arquivos estaticos
.use(express.static("public")) //transforma a pasta public em pasta raiz para os arquivos
//rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

