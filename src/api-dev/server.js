const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/ampunv.db')
const port = 3000

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


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

app.get('/api/users/:id', (req, res)=>{
    res.setHeader('Content-Type', 'application/json')
    sql = 'SELECT * FROM users WHERE id=?'
    db.all(sql, [req.params.id], (err,rows)=>{
        if (err) throw err
        res.send(JSON.stringify(rows))
    })
})
app.get('/api/products/:id', (req, res)=>{
    res.setHeader('Content-Type', 'application/json')
    sql = 'SELECT * FROM products WHERE id=?'
    db.all(sql, [req.params.id], (err,rows)=>{
        if (err) throw err
        res.send(JSON.stringify(rows))
    })
})

app.listen(port, () =>{
    console.log(`Listening on localhost:${port}`)
})