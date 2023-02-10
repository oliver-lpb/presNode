const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuracion
app.use(bodyparser.json());

//base de datos
var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'bienestar',
    database: 'crudnode',
    multipleStatements: true
    });

    mysqlConnection.connect((err)=> {
        if(!err)
        console.log('conectado');
        else
        console.log('fallo!'+ JSON.stringify(err,undefined,2));
        });

    //Establish the server connection
//trae datos
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Puesto listo ${port}..`));

app.get('/vendedor' , (req, res) => {
    mysqlConnection.query('SELECT * FROM vendedor', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

    //envio de datos
    app.post('/vendedores', (req, res) => {
        let learner = req.body;
        var sql = "SET @nombre = ?;SET @apellido = ?;SET @supervisor=?"; 
        CALL learnerAddOrEdit(nombre,apellido,superviso);"
        mysqlConnection.query(sql, [learner.nombre, learner.apellido, learner.superviso,(err, rows, fields) => {
        if (!err)
        rows.forEach(element => {
        if(element.constructor == Array)
        res.send('Nuevo: '+ element[0].learner_id);
        });
        else
        console.log(err);
        })
        });
        //borrar datos
        app.delete('/vendedores/:id', (req, res) => {
            mysqlConnection.query('DELETE FROM vendedores WHERE id = ?', [req.params.id], (err, rows, fields) => {
            if (!err)
            res.send('eliminado.');
            else
            console.log(err);
            })
            });