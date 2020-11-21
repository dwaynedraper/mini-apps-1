const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('client'))
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.post('/upload_JSON', (req, res) => {
  console.log(req.body.text);
  res.sendStatus(201);
});

app.use('/', router)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}.`)
});