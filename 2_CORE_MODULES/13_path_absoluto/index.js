const path = require('path')

// Path absoluto
console.log(path.resolve('teste.txt'))

//Formar Path
const midFolder = 'relatorios'
const fileName = 'marcos.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)