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
    let feriado = "1/1/2022"
    let holidayName = ""
    let bolean = ""
    for(let i = 0; i < holidays.length; i++){
      console.log(holidays[i].date)
      if(holidays[i].date == hoje ){
         holidayName =holidays[i].name
         bolean = true
      }else{
       bolean = false
      }


      if(bolean === true){
       resp.send(`sim , hoje é ${holidayName}`)
      }else{
       resp.send("não , hoje não é um feriado")
      }
    }
    

})



server.listen(4000)