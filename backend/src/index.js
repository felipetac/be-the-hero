const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

//Informa que usurá requisições formato JSON
app.use(express.json())

app.use(routes);

app.listen(3333)