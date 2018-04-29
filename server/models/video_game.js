const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sub_videoGameSchema = new Schema({
  _id : false,
  platform_name:String,
  compatible_with: [{
    platform_name: String,
    party_join: Boolean,
    server_join: Boolean
  }]
})

// Define a model for the 'Video Game'
const video_gameSchema = new Schema({
  title: String,
  publisher: String,
  year_released: Number,
  description: String,
  genres: [],
  modes:  {
    single_player: Boolean,
    multi_player: Boolean,
    local_co_op: Boolean
  },
  img_ns: String,
  available_on: [sub_videoGameSchema]
});

//name of model, schema to bind it to, collection in DB
module.exports = mongoose.model('video_game', video_gameSchema, 'video_games');
