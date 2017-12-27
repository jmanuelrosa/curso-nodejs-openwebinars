process.on('unhandledRejection', (err, p) => {
  console.log('Custom Error: An unhandledRejection occurred')
  console.log(`Custom Error: Rejection: ${err}`)
})

process.on('uncaughtException', err => {
  console.log('Custom Error: An uncaughtException occurred')
  console.log(`Custom Error: Rejection: ${err}`)
})

setTimeout(() => console.log('This will still run.'), 500)

// El error es JSON.pasre
Promise(resolve => JSON.pasre({ color: 'azul' }))
// test()
// throw 'casa'
