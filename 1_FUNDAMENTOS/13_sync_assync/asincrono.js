const fs = require("fs")

console.log('Inicio')

fs.writeFile('arquivo3.txt', 'oi', function(err) {
    setTimeout(function() {
        console.log('Arquivo Criado')
    }), 5000
})

console.log('Fim')