// Muestra el número total de lineas, y el número de palabras por linea
// Documentación: https://nodejs.org/api/readline.html
// Ejemplo: npm start sample.txt
const readline = require('readline');

const file = process.argv[2]
let lines = 0

console.log(`Fichero selecionado: ${file}\n`)

// Emite el evento 'line' cuando lee una linea
const rl = readline.createInterface({
  input: fs.createReadStream(file),
  crlfDelay: Infinity
})

rl.on('line', (line) => {
  ++lines
  console.log(`Número de caracteres por linea: ${line.length}`)
})

rl.on('close', () => {
  console.log(`\nNúmero total de lineas: ${lines}`)
})
