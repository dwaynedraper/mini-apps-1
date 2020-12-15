const express = require('express');
const app = express();
const port = 3000;
express.json();
express.urlencoded({extended: true});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Checkout app listening at http://localhost:${port}`);
})

