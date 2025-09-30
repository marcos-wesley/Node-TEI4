const fs = require('fs')

const arqAnt = 'arquivo.txt'
const newArq = 'novoarquivo.txt'

fs.rename(arqAnt, newArq, function(err) {
    if(err) {
        console.log(err)
        return
    }

    console.log('Arquivo Renomeado!')
})