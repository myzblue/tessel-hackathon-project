var av = require('tessel-av');
var os = require('os');
var http = require('http');
var port = 8080;
var camera = new av.Camera();
var fs = require('fs');
var path = require('path');

var twoFiles = [];

var gm = require('gm');//.subClass({imageMagick: true});

var imageCount = 0;

var bool = true;

var timerCamera = setInterval(function() {
var capture = camera.capture();
capture.on('data', function (data) {
    var name = 'picture-' + Math.floor(Date.now()*1000) + '.jpg';
    console.log(__dirname);
    fs.writeFileSync(path.join(__dirname, name), data);
    twoFiles.push(path.join(__dirname, name));
    imageCount++;

	if (imageCount>5) {
	
	var file2 = twoFiles[0];
	var file1 = twoFiles[1];
	console.log(file2);
	console.log(file1);

	gm.compare(file1, file2, 0.02, function (err, isEqual, equality, raw) {
	 if (err) console.log(err);
	 bool = isEqual;
	 console.log('The images are equal: %s', isEqual);
	 console.log('Actual equality: %d', equality)
	 console.log('Raw output was: %j', raw);
	});

	console.log("here");

	}

})
}, 1000)


http.createServer(function (req, res, next) {

	console.log('Do ');

    // var takePicture = camera.capture();

    // takePicture.on('data', function (image) {
    //     res.writeHead(200, {'Content-Type': 'image/jpg'});

        // camera.capture().pipe(response);
    res.write("fruit loops is there", bool);
    res.end();
    // });

   // camera.output()

}).listen(port, () => console.log(`http://${os.hostname()}.local:${port}`));