const express = require('express')
const mc = require('./controllers/messages_controller.js')

let port = 3001
let app = express()
app.use(express.json())

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages', mc.delete)


app.listen(port, () => console.log(`listening on ${port}`))

