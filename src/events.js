import fs from 'fs'
import readline from 'readline'

export default file => {
  console.log('Eventos')

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
}
