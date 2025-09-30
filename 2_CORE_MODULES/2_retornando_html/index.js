const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    res.end('<h1>Oi, este é o meu primeiro servidor com HTML</h1>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})