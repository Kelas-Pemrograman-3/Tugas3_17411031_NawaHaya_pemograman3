const mahasiswa = require('express').Router()

const mahasiswacontroller = require('../controller/mahasiswacontroller')

mahasiswa.post('/simpan', (req, res) => {
  mahasiswacontroller.simpandata(req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

mahasiswa.post('/login', (req, res) => {
  mahasiswacontroller.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

mahasiswa.get('/getmhs', (req, res) => {
  mahasiswacontroller.getmhs()
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

module.exports = mahasiswa
