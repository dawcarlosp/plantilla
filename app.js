const express = require('express')
const app = express()
app.set('view engine','ejs')
app.get('/', function (req, res) {
    const datos = [
        {nombre: 'Ana', apellidos: 'Morales'},
        {nombre: 'Miguel', apellidos: 'Gutierrez'}
    ];
  res.render('index', {datos:datos});
})
app.get('/saludo', function (req, res){
    res.render('saludo',{hora:16});
})
app.get('/producto', function (req, res){
    const producto = {
        id: 1 , nombre: 'Lavadora', precio: 12, colores : ["rojo","negro"]
    };
    res.render('producto',{producto:producto});
})
app.listen(3000)