const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const utils = require('./utils/utils.js');
const multer = require('multer');
const upload = multer({dest:'uploads/'})

app.use(express.static('client'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/', (req, res) => {
  let json = JSON.parse(req.body.submitData);
  let csv = utils.convertToCSV(json);
  res.send(csv);
});

// app.post('/', upload.single('json'), (req, res) => {
//   try {
//     res.send(req.file);
//   } catch(err) {
//     res.send(400);
//   }
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}.`)
});

//input JSON
//output CSV report
//upload json
//convertToCSV
//create a CSV file with fs.writeFile
//send a CSV representation

//ejs ?? embedded javascript templates, handlebars, pug

//express method to download file
//multer ?? file upload
//form enctype