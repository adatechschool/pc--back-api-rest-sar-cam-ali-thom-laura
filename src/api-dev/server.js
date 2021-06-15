const express = require('express')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/ampunv.db');
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send('AMPUNV API v1.0')
})

app.get('/api/products/all', (req,res) => {
    res.setHeader('Content-Type', 'application/json')
    sql = 'SELECT * FROM products'
    db.all(sql, [], (err,rows)=>{
        if (err) throw err
        res.send(JSON.stringify(rows))
    })
})

app.get('/api/users/all', (req, res)=>{
    res.setHeader('Content-Type', 'application/json')
    sql = 'SELECT * FROM users'
    db.all(sql, [], (err,rows)=>{
        if (err) throw err
        res.send(JSON.stringify(rows))
    })
})

app.listen(port, () =>{
    console.log(`Listening on localhost:${port}`)
})