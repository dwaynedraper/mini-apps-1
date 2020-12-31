const express = require('express');
const app = express();

app.use(express.static('./client/dist/'))

app.listen(3000, () => {
  console.log('Connect Four app listening at port 3000.')
})
