const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  completedTasks: [{date: String, reps: Number}],
  settings: {
    day: {type: String},
    startTime: {type: Date},
    endTime: {type: Date},
    breakType: {type: String}
  }
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;
