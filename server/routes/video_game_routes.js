const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const video_game = require('../models/video_game');

const db = "mongodb://johnny:pass@ds161316.mlab.com:61316/video_games";
var dateLog;

// Connect to DB
mongoose.connect(db, function(err) {
  if (err) {
    console.log("Error" + err);
  } else {
    console.log("Connected to the video_games database.");
  }
});
mongoose.Promise = require('bluebird');


/*-----------------------------------------------------------------------------------------------
          API REQUEST HANDLERS
-----------------------------------------------------------------------------------------------*/

// GET ALL
router.get('/video_games', function(request, response) {
  dateLog = new Date();
  var loggingString = dateLog.toLocaleString() + ":" + dateLog.getMilliseconds() + " - GET: A request for ALL games!!!";

  video_game.find({})
    .exec(function(error, video_game) {
      if (error) {
        console.log("Error!!" + err);
      } else {
        console.log(loggingString + " | Count: " + video_game.length);
        response.json(video_game);
      }
    })
});

// GET ONE
router.get('/video_games/:id', function(request, response) {
  dateLog = new Date();
  var loggingString = dateLog.toLocaleString() + ":" + dateLog.getMilliseconds() + " - GET: Requested a single game!";

  video_game.findById(request.params.id)
    .exec(function(error, video_game) {
      if (error) {
        console.log("Error" + error);
      } else {
        console.log(loggingString += " | " + video_game.title);
        response.json(video_game);
      }
    })
});

// POST -- need to be refined!!!
router.post('/video_game', function(request, response) {
  dateLog = new Date();
  var loggingString = dateLog.toLocaleString() + ":" + dateLog.getMilliseconds() + " - POST - Posting a video to database";

  var new_video_game = new video_game();
  new_video_game.title = request.body.title;
  new_video_game.publisher = request.body.publisher;
  new_video_game.img_ns = request.body.url;
  new_video_game.available_on = request.body.available_on;

  console.log(request.body);
  new_video_game.save(function(error, insertedVideo_Game) {
    if (error) {
      console.log("Error saving video game");
    } else {
      console.log(loggingString + " | Added: " + insertedVideo_Game.title);
      response.json(insertedVideo_Game);
    }
  });
});

// PUT -- need to be refined!!!
router.put('/video_game/:id', function(request, response) {
  dateLog = new Date();
  console.log(dateLog.toLocaleString() + ":" + dateLog.getMilliseconds() + " - Updating a video");
  video_game.findByIdAndUpdate(request.params.id, {
      $set: {
        title: request.body.title,
        publisher: request.body.publisher,
        url: request.body.url,
        available_on: request.body.available_on
      }

    }, {
      new: true //return updated view.
    },
    function(error, updatedVideo_Game) {
      if (error) {
        response.send("Error updating");
      } else {
        response.json(updatedVideo_Game);
      }
    })
});

//DELETE
router.delete('/video_game/:id', function(request, response) {
  dateLog = new Date();
  console.log(dateLog.toLocaleString() + " - Deleting a video game");
  video_game.findByIdAndRemove(request.params.id, function(error, deleted_video) {
    if (error) {
      console.log("Error deleting video game");
    } else {
      response.json(deleted_video);
    }
  })
});

module.exports = router;
