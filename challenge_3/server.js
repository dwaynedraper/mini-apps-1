const express = require('express');
const app = express();
const port = 3000;
const database = require('./database/index.js')
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.post('/order', function(req, res) {
  console.log('req.body in POST /order', req.body)
  database.saveOrder(req.body);
  res.end();
})

app.listen(port, () => {
  console.log(`Checkout app listening at http://localhost:${port}`);
})

