const mahasiswamodel = require('../models/MahasiswaModel')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

exports.simpandata = (data) =>
new Promise((resolve, reject) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    data.password = hash
    // console.log(data.password)
    mahasiswamodel.find({
      npm:data.npm
    }).then(hasil => {
      if (hasil.length > 0) {
        reject({
          error: true,
          pesan: 'NPM sdah Digunakan'
        })
      } else {
        mahasiswamodel.create(data)
    .then(res => {
      resolve ({error:false, pesan: 'Data Berhasil Tersimpan'})
    })
    .catch(res => {
      console.log(error)
      reject ({error:true, pesan: 'npm sdah digunakan'})
    })
      }
    })
  })
})
exports.login = (data) =>
new Promise((resolve, reject) => {
  mahasiswamodel.findOne({
    npm: data.npm
  }).then(res => {
    // console.log(res)
    if (res === null){
      reject({
        error: true,
        pesan: 'Username salah'
      })
    } else {
      // compres password
      let hashpassword = res.password
      //cek apakah sama data yang kita kirim dengan data yang di data base
      if (bcrypt.compareSync(data.password, hashpassword)) {
        resolve({
          error: false,
          pesan: 'berhasil login',
          data: res
        })
      } else {
        reject({
          error: true,
          pesan: 'password salah'
        })
      }
    }
  })
})  
  
  exports.getmhs = () =>
  new Promise((resolve, reject) => {
    mahasiswamodel.find()
    .then(res => {
      resolve ({error:false, pesan: 'Data Berhasil diambil', data: res})
    })
    .catch(res => {
      console.log(error)
      reject ({error:true, pesan: 'Data Tidak diambil'})
    })
  })
  

