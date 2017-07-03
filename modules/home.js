var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var homeShema = new Schema({
    name: String,
    user: {type: Schema.Types.ObjectId, required:true}
});

var Home = mongoose.model('Home',homeShema);

module.exports = Home;