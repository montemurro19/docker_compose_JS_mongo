const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://monts:hnjd0RFUYiHhu3wM@cluster0.5xksxxs.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}