import express from 'express'
import cors from "cors"
import holidays from "./holidays.js"

const server = express()
server.use(cors())

console.log(holidays)
server.get("/holidays", (req, resp) => {
    resp.send(holidays)
})

server.get("/is-today-holiday", (req, resp) => {
    const hoje = new Date().toLocaleDateString("en-US")
    let arr = []
    holidays.map((holiday) => {
        arr.push(holiday.date)
    })
    const encontrar = arr.includes(hoje)
    if (encontrar === true) {
        resp.send("sim , é feriado")
    } else {
        resp.send("não , não é feriado")
    }

})



server.listen(4000)