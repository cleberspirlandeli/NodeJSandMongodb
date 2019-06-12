const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://crspirlandeli:92novaSenha!@cluster0-6qsry.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

requireDir('./models');


app.use('/api', require('./routes'));


app.listen(3333, () => {
    console.log('Rodando porta 3333');
});