const express = require('express')
const app = express()
const cors = require('cors')
const body_parser = require('body-parser')
const routes = require('./routes/route')


app.use(cors());

app.use(body_parser.json());
app.use(body_parser.raw());

app.use(routes);

app.listen(8081, ()=>{ console.log("server started")})
