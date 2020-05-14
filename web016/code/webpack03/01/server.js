const express = require("express")
const app = express()
app.get("/", (res, req) => {
    res.send("hello")
})

app.listen(8080)
console.log("server run at 127.0.0.1:8080");