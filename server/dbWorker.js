
function dbWorker(mongoose) {
	
	this.mongoose = mongoose;
	

	this.users = function() {
		var Schema = this.mongoose.Schema;

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
var User = this.mongoose.model('Users', userSchema);

return User;
	}
}

module.exports = dbWorker;