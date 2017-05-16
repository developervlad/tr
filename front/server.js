const express = require('express');
const app = express();

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});

/*===========================================================================*/

var mongoose = require('mongoose');
 
mongoose.connect('mongodb://user:23we23we@ds155080.mlab.com:55080/kursovaya?authSource=kursovaya');

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  ids: String,			
  username: String,
  password: String,
  name: String,
  role: String
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});