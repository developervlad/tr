const express = require('express');
const app = express();

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const port = process.env.PORT || 3000;


const y = app.listen(port, () => {
    console.log('app listening on', port);
});

const io = require('socket.io').listen(y);

/*===========================================================================*/

var mongoose = require('mongoose');
 
mongoose.connect('mongodb://user:23we23we@ds155080.mlab.com:55080/kursovaya');

var dbWorker = require('./dbWorker');
var db = new dbWorker(mongoose);

// db.users().find({}, function(err, users) {
//   if (err) throw err;

//   // object of all the users
//   console.log(users);
// });

/*==========================================================================*/

io.on('connection', function(socket){
    console.log("Socket connected: " + socket.id);

    socket.on('action', (action) => {
        if(action.type === 'server/hello'){
            console.log('Got hello data!', action.data);
            socket.emit('action', {type:'message', data:'good day!'});
        }
    });

    /*======================================================================*/

     socket.on('action', (action) => {
        if(action.type === 'server/LOGIN'){
            
            db.users().findOne({username: action.username, password: action.password}, function (err, person) {
                    if (err) return handleError(err);
                    console.log(person);
                    socket.emit('action', {type:'AUTH', role: person.role});
            })
            
            
        }
    });

});


