const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Routers = require("./Routers");
const {db}  = require('./Models');



//logging middleware
app.use(morgan('dev'));


//Body Parser Middleware
app.use(bodyParser.json());

// Router Middleware
app.use('/', Routers);

app.use((err, req, res, next) => {
    if(err.status) res.status(err.status).send(err.message);
})

db.sync()
.then(() => {
    app.listen(3000, () => console.log('app is listening at port 3000'));
})



module.exports = app;