const matakuliah = require('express')()

const matkulcont = require('../controller/matakuliacont')

matakuliah.post('/simpan', (req, res) => {
    matkulcont.simpandata(req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
  })

  matakuliah.get('/getmk', (req, res) => {
    matkulcont.getmatakuliah()
      .then(result => res.json(result))
      .catch(error => res.json(error))
  })


module.exports = matakuliah