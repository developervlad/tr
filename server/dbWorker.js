
function dbWorker(mongoose) {
	
	this.mongoose = mongoose;
	

	this.users = function() {
		var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  ids: String,			
  username: String,
  password: String,
  name: String,
  role: String
}, { collection : 'Users' });

// the schema is useless so far
// we need to create a model using it
var model;
if(mongoose.models.Users) {
model = mongoose.model('Users');
} else {
model = mongoose.model('Users', userSchema);
}

return model;
	}

	this.courses = function() {
		var Schema = mongoose.Schema;

// create a schema
var newSchema = new Schema({
  ids: String,			
  name: String,
  description: String,
  image: String,
  lecturerID: String,
}, { collection : 'Courses' });

// the schema is useless so far
// we need to create a model using it
var model;
if(mongoose.models.Courses) {
model = mongoose.model('Courses');
} else {
model = mongoose.model('Courses', newSchema);
}


return model;
	}

		this.lectors = function() {
		var Schema = mongoose.Schema;

// create a schema
var newSchema = new Schema({
  ids: String,			
  name: String,
  faculty: String,
  cafedra: String,
  image: String,
}, { collection : 'Lectors' });

// the schema is useless so far
// we need to create a model using it
var model;
if(mongoose.models.Lectors) {
model = mongoose.model('Lectors');
} else {
model = mongoose.model('Lectors', newSchema);
}

return model;
	}

		this.lections = function() {
		var Schema = mongoose.Schema;

// create a schema
var newSchema = new Schema({
  ids: String,			
  name: String,
  courseID: String,
  link: String
}, { collection : 'Lections' });

// the schema is useless so far
// we need to create a model using it
var model;
if(mongoose.models.Lections) {
model = mongoose.model('Lections');
} else {
model = mongoose.model('Lections', newSchema);
}

return model;
	}

}

module.exports = dbWorker;