/*
    COMMENTAIRES ET PROTIPS

    TODO:
        Les fontionnalites de connexion et d'inscription utilisateur & le reset de pass 

*/

const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/ampunv.db')
const port = 3000

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send('AMPUNV API v1.0')
})

app.get('/api/products/all', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    sql = 'SELECT * FROM products'

    db.all(sql, [], (err, rows) => {
        if (err) throw err
        res.send(JSON.stringify(rows))
    })
})

app.get('/api/users/all', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    sql = 'SELECT * FROM users'
    db.all(sql, [], (err, rows) => {
        if (err) throw err
        res.send(JSON.stringify(rows))
    })
})

app.put('/api/users/new', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    console.log(req.body.hash);

    if (!req.body.name || !req.body.mail || !req.body.display_name || !req.body.hash){
        res.send(JSON.stringify({
            result: 'error',
            message: 'Values should not be empty'
        }))
        return
    }
    sql = 'INSERT INTO users (name, display_name, mail, hash) VALUES (?,?,?,?)'

    db.all(sql, [req.body.name, req.body.display_name, req.body.mail, req.body.hash], (err, rows) => {

        if (err) res.send(JSON.stringify({
            result: 'error',
            message: err.message
        }))
        res.send(JSON.stringify({
            result: 'success',
            message: 'Successfully updated user with ID ' + req.params.id + '.' 
        }))
    })
})
app.use('/api/users/:id', (req, res) => {
    if (req.method === 'GET') {
        sql = 'SELECT * FROM users WHERE id=?'
        db.all(sql, [req.params.id], (err, rows) => {
            if (err) throw err
            res.send(JSON.stringify(rows))
        })
    } else if (req.method === 'PATCH') {

        sql = 'UPDATE users SET name=?, display_name=?, mail=? WHERE id=?'

        if ((!req.body.name || !req.body.mail || !req.body.display_name) ||
            (req.body.name === '' || req.body.mail === '' || req.body.display_name === '')) {
            res.send(JSON.stringify({
                result: 'error',
                message: 'Values should not be empty'
            }))
            return
        }
        db.all(sql, [req.body.name, req.body.display_name, req.body.mail, req.params.id], (err, rows) => {

            if (err) res.send(JSON.stringify({
                result: 'error',
                message: err.message
            }))
            res.send(JSON.stringify({
                result: 'success',
                message: 'Successfully updated user with ID ' + req.params.id + '.'
            }))
        })


    } else if (req.method === 'DELETE') {
        sql = 'DELETE FROM `users` WHERE id=?'
        db.all(sql, [req.params.id], (err, sql_res) => {
            if (err) res.send(JSON.stringify({
                result: 'error',
                message: err.message
            }))
            res.send(JSON.stringify({
                result: 'success',
                message: 'Successfully deleted user with ID ' + req.params.id + '.'
            }))
        })
    } else {
        res.status(405)
        res.send(JSON.stringify({
            result: 'error',
            message: 'Method not allowed'
        }))
    }
})

app.use('/api/products/:id', (req, res) => {
    if (req.method === 'GET') {
        sql = 'SELECT * FROM products WHERE id=?'
        db.all(sql, [req.params.id], (err, rows) => {
            if (err) throw err
            res.send(JSON.stringify(rows))
        })
    } else if (req.method === 'PATCH') {

        sql = 'UPDATE products SET title=?, price=?, dim_l=?, dim_w=?, dim_h=?, pic=?, category=?, color=?, material=?, status=? WHERE id=?'

        if ((!req.body.title || !req.body.price || !req.body.dim_l || !req.body.dim_w || !req.body.dim_h || !req.body.pic ||
                !req.body.category || !req.body.color || !req.body.material || !req.body.status)) {
            res.send(JSON.stringify({
                result: 'error',
                message: 'Values should not be empty'
            }))
            return
        }
        db.all(sql, [
            req.body.title, req.body.price, req.body.dim_l,
            req.body.dim_w, req.body.dim_h, req.body.pic,
            req.body.category, req.body.color, req.body.material,
            req.body.status, req.params.iusersd
        ], (err, rows) => {

            if (err) res.send(JSON.stringify({
                result: 'error',
                message: err.message
            }))
            res.send(JSON.stringify({
                result: 'success',
                message: 'Successfully updated user with ID ' + req.params.id + '.'
            }))
        })


    } else if (req.method === 'DELETE') {
        sql = 'DELETE FROM products WHERE id=?'
        db.all(sql, [req.params.id], (err, sql_res) => {
            if (err) res.send(JSON.stringify({
                result: 'error',
                message: err.message
            }))
            res.send(JSON.stringify({
                result: 'success',
                message: 'Successfully deleted user with ID ' + req.params.id + '.'
            }))
        })
    } else {
        res.status(405)
        res.send(JSON.stringify({
            result: 'error',
            message: 'Method not allowed'
        }))
    }
})
app.get('/api/products/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    sql = 'SELECT * FROM products WHERE id=?'
    db.all(sql, [req.params.id], (err, rows) => {
        if (err) throw err
        res.send(JSON.stringify(rows))
    })
})

app.put('/api/products/new', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    if ((!req.body.title || !req.body.price || !req.body.dim_l || !req.body.dim_w || !req.body.dim_h || !req.body.pic ||
            !req.body.category || !req.body.color || !req.body.material || !req.body.status)) {
        res.send(JSON.stringify({
            result: 'error',
            message: 'Values should not be empty'
        }))
        return
    }

    sql = 'INSERT INTO products (title, price, dim_l, dim_w, dim_h, pic, category, color, material, status) VALUES (?,?,?,?,?,?,?,?,?,?)'
    db.all(sql, [
        req.body.title, req.body.price, req.body.dim_l,
        req.body.dim_w, req.body.dim_h, req.body.pic,
        req.body.category, req.body.color, req.body.material,
        req.body.status
    ], (err, rows) => {
        if (err) res.send(JSON.stringify({
            result: 'error',
            message: err.message
        }))
        res.send(JSON.stringify({
            result: 'success',
            message: 'Successfully added new product with ID.'
        }))
    })
})


app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})