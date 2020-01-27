const matakuliahmod = require('../models/matakuliah')

exports.simpandata = (data) =>
new Promise((resolve, reject) => {
  matakuliahmod.create(data)
  .then(res => {
    resolve ({error: false,
    pesan: 'Data Terimput'})
  })
  .catch(res => {
    reject({
      error: true,
      pesan: 'Gaagal Terimput'
    })
  })
})

exports.getmatakuliah = () =>
new Promise((resolve, reject) => {
  matakuliahmod.find()
  .then(res => {
    resolve ({error:false, pesan: 'Data Berhasil diambil', data: res})
  })
  .catch(res => {
    console.log(error)
    reject ({error:true, pesan: 'Data Tidak diambil'})
  })
})