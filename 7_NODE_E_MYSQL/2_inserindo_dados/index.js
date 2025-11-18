const express = require('express')
const exphbs = require('express-handlebars')
const mysql =  require('mysql')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home')
})


app.post('/books/insertbook', function (req, res) {

    const title = req.body.title
    const pageqtd = req.body.pageqtd

    const sql = `INSERT INTO books (title, pageqtd)
    VALUES ('${title}', '${pageqtd}')`

    conn.query(sql, function(err){
        if(err) {
        console.log(err)
        }
        res.redirect('/')
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
})

conn.connect(function(err) {
    if(err) {
        console.log(err)
    }

    console.log('Conectou ao MYSQL!')

    app.listen(3000)
})