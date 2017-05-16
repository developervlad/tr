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

        if(action.type === 'server/GET_COURSES'){
            
            db.courses().find({}, function (err, data) {
                    if (err) return handleError(err);
                    socket.emit('action', {type:'RECEIVE_COURSES', courses: data});
            }) 
        }

        if(action.type === 'server/GET_LECTORS'){
            
            db.lectors().find({}, function (err, data) {
                    if (err) return handleError(err);
                    socket.emit('action', {type:'RECEIVE_LECTORS', lectors: data});
            }) 
        }

        if(action.type === 'server/ADD_LECTOR'){
            
            var y = new db.lectors(mongoose)({ids: action.id, name: action.name, faculty: action.faculty, cafedra: action.cafedra});

            y.save(function (err) {
  if (err) {
        return err;
  }
  else {
    console.log("Post saved");
  }
});

        }

         if(action.type === 'server/ADD_COURSE'){
            
            var t = new db.courses(mongoose)({ids: action.id, name: action.name, description: action.description});

            t.save(function (err) {
  if (err) {
        return err;
  }
  else {
    console.log("Post saved");
  }
});

        }

    });

});


