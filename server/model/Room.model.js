const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const roomSchema = new Schema({
  name: String,
  seats: Number,
  schedules: [{
    scheduleID: mongoose.Types.ObjectId,
  }]
});

const Room = model('Room', roomSchema);

module.exports = Room;