const config = require('config');
const mongoose = require('mongoose');
const express = require('express')
const path = require('path')

let app = express();

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname, 'clint', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'clint', 'build', 'index.html'))
    })
}


const PORT = config.get('port') || 5000

async function start(){
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e){
        console.log(' Server Error', e.message)
        process.exit(1)
    }
}

start()

