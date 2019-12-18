const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./rutas/routes');

//Settings
app.set('appName', 'API Inventario');
app.set('json spaces', 4);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Rutas
app.use('/inventario',routes);
app.get('*', (req, res) => {
  res.end('No esta aquí....');
});

//Arrancando servidor
app.listen(3000, () => {
  console.log('Server listen!!');
  console.log('Nombre de la APP: ', app.get('appName'));
});
