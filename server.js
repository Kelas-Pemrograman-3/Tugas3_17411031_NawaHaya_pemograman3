const server = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 5000
const cors = require('cors')
const mongooseurl = 'mongodb://127.0.0.1/dblatihan'

server.use(cors())
mongoose.connect(mongooseurl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log('connect mongodb'))
.catch((err) => console.log(err))

server.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}))

server.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))

server.use('/mahasiswa', require('./router/mahasiswa'))
server.use('/matakuliah', require('./router/matkulrouts'))


server.listen(port, function () {

    console.log('server starting on port ' + port)

})