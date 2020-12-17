const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orders', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Connection open!')
})

const orderSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: Number,
  creditCard: Number,
  exp: String,
  cvv: Number
})

const Order = mongoose.model('Order', orderSchema);

const saveOrder = (state) => {
  console.log('saveOrder function fired')
  const newOrder = new Order({
    username: state.username,
    email: state.email,
    password: state.password,
    address1: state.address1,
    address2: state.address2,
    city: state.city,
    state: state.state,
    zip: state.zip,
    creditCard: state.creditCard,
    exp: state.exp,
    cvv: state.cvv
  })
  return newOrder.save(function(err, newOrder) {
    if (err) return console.error(err);
    console.log('Document inserted successfully!');
  })
}

exports.saveOrder = saveOrder;