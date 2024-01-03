const mongoose = require('mongoose')

const id = 'sdh220418'
const password = 'TqsaeSdqMkwODBd0'
const connectionString = `mongodb+srv://${id}:${password}@cluster0.feuugeg.mongodb.net/?retryWrites=true&w=majority`
module.exports = async function(){
    
    await mongoose.connect(connectionString)
    console.log('Connected!')
    
}