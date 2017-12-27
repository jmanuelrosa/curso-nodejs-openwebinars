// Muestra el número total de lineas, y el número de palabras por linea
// Documentación: https://nodejs.org/api/fs.html
// Ejemplo: npm start sample.txt
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, (err, contents) => {
  if (err) {
    return console.log(err)
  }

  const lines = contents.toString().split('\n')

  for(let line of lines) {
    console.log(`Número de caracteres por linea: ${line.length}`)
  }

  console.log(`\nNúmero total de lineas: ${lines.length}`)
})

console.log(`Fichero selecionado: ${file}\n`)
