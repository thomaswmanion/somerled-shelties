'use strict';

var _ = require('lodash');
var fs = require('fs');

var getImages = function(callName) {
  var path = 'assets/images/dogs/' + callName.toLowerCase() + '/';
  var files = fs.readdirSync('client/' + path);
  var fullPaths = [];
  files.forEach(function(file) {
    if (file.match(/(jpg|png|gif|bmp)/)) {
      var url = path + file;
      fullPaths.push({url: url});
    }
  });
  return fullPaths;
};

var getDogDescriptions = function(cb) {
  fs.readFile('server/api/dogs/descriptions.txt', function (err, data) {
    if (err) { return handleError(res, err); }
    var descriptions = [];
    var imageGrabbers = [];
    var dogDescriptions = data.toString().split(/---+/);
    dogDescriptions.forEach(function(dogDescription) {
      var colonPieces = dogDescription.split(':');
      var callName = colonPieces[0].trim();
      colonPieces.shift();
      var description = colonPieces.join(':').trim();
      var images = getImages(callName);
      descriptions.push({
        callName: callName,
        description: description,
        images: images
      });
    });
    cb(descriptions);
  });
};

var getCarouselImages = function() {
  var path = 'assets/images/carousel/';
  var files = fs.readdirSync('client/' + path);
  var fullPaths = [];
  files.forEach(function(file) {
    if (file.match(/(jpg|png|gif|bmp)/)) {
      var url = path + file;
      fullPaths.push({url: url});
    }
  });
  return fullPaths;
};

exports.descriptions = function(req, res) {
  getDogDescriptions(function(descriptions) {
    var content = {};
    content.descriptions = descriptions;
    content.carouselImages = getCarouselImages();
    return res.json(200, content);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}