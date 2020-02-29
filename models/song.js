const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: String },
    genre: { type: String },
    bpm: { type: Number }
});



const Song = mongoose.model("Song", songSchema);

module.exports = Song;