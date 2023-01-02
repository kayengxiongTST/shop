const app = require('./app.js')

const { PORT } = require('../config/index.js')

app.listen(PORT || 8000, () => console.log("The server is starting now"))