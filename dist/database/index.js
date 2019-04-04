"use strict";

var mongoose = require('mongoose'); // const url = 'mongodb://localhost:27017/poa_eats'


var url = 'mongodb+srv://target:target@mongodb-zjbnv.mongodb.net/test?retryWrites=true';
var db = mongoose.createConnection(url);
exports.db = db; // const MongoClient = require('mongodb').MongoClient
// const uri = 'mongodb://localhost:27017'
// const client = new MongoClient(uri, { useNewUrlParser: true })
// let db = null
// const getDB = () => {
//   return new Promise((resolve, reject) => {
//     if (db == null) {
//       client.connect(err => {
//         if (err) {
//           console.error(err)
//           reject(err)
//           return
//         }
//         db = client.db('poa_eats')
//         resolve(db)
//       })
//     } else {
//       resolve(db)
//     }
//   })
// }
// exports.getDB = getDB