var express = require('express');
var app = express();
var av = require('tessel-av');
var os = require('os');
var http = require('http');
var fs = require('fs');
var path = require('path');
var port = 8080;
var camera = new av.Camera();

var capture = camera.capture();

var file = fs.readFileSync(path.join(__dirname, name));
console.log(file)

// capture.on('data', function (data) {
//     var name = 'picture-' + Math.floor(Date.now()*1000) + '.jpg';
//     console.log(__dirname);
//     fs.writeFileSync(path.join(__dirname, name), data);
//     var file = fs.readFileSync(path.join(__dirname, name));
//     console.log(file);
// });


// camera.on('ready', function() {
//   notificationLED.high();
//   // Take the picture
//   camera.capture(function(err, image) {
//     if (err) {
//       console.log('error taking image', err);
//     } else {
//       notificationLED.low();
//       // Name the image
//       var name = 'picture-' + Math.floor(Date.now()*1000) + '.jpg';
//       // Save the image
//       console.log('Picture saving as', name, '...');
//       process.sendfile(name, image);
//       console.log('done.');
//       // Turn the camera off to end the script
//       camera.disable();
//     }
//   });
// });

