// Require de Express
const express = require ('express');

// Require de FS
const fs = require ('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

const mainRoute = require ('./routes/main')

app.use('/', mainRoute);

const heroesRoute = require ('./routes/heroes')
app.use('/heroes', heroesRoute);


app.use('/heroes/detalle/:id',heroesRoute );


app.use('/heroes/bio/:id/:ok?',	heroesRoute);


app.get('/creditos', heroesRoute);


app.get('*', heroesRoute );