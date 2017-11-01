let express = require('express')
let app = express()
let path = require('path')


let webapps = [
    'someappthatnobodywillreallyuse',
    // further project paths/names go here (this array will end up in separate file for ease of .gitignore)
]

// creates a path for every string in the webapps array (e.g. "yourpage.com/" + webapps[0])
webapps.map((appName) => {
    app.get('/' + appName, (req, res, next) => {
        res.sendFile(path.join(__dirname, '/webapps/', appName, '/index.html'))
    })
})

// Put your homepage here if you want one
app.get('/', (req, res, next) => {
      res.send('hello world')
//      ... or res.sendFile().
})

app.use((err, req, res, next) =>  {
    if(err.status !== 404) {
        return next()
    } else {
        res.status(404)
    }
})

app.listen(3000)
