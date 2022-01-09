const express = require('express')
const path = require('path');
const multer = require('multer')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000 // Heroku will need the PORT environment variable

app.use(cors())

app.use('/images', express.static('images'));

//multer options
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' +file.originalname)
    }
})

const upload = multer({ storage: storage }).single('file')

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.sendStatus(500);
      }
      res.send(req.file);
    });
});

app.get('/', (req, res) => {
    res.status(200).json({mesaage:'Server is running well!'})
})


//app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`))