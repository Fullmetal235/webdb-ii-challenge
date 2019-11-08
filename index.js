const server = require('./cars/server.js')

const port = 8001

server.listen(port,  () => console.log(`\nlistening on port ${port}\n`))