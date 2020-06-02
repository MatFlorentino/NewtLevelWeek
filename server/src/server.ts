import express from 'express';

const app = express();


//rota get, parametro 1 = rota, parametro 2 = função

// (parametro', parametro1, ...) => { expreções }     é semelhante a: function (parametro1...){return ( expreções)}
// É chamado Arrow Function

app.get('/users', (request, response) => {
    response.json([
        'mateus'

    ])

});

app.get('/teste', (request, response) => {
    response.send('You are in the "teste" route')

});

app.listen(3333);