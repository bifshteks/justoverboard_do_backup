 // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================

    mongoose.connect('mongodb://admin:hjccbz98@sl-eu-fra-2-portal.1.dblayer.com:17627/compose?authSource=admin&ssl=true');     // connect to mongoDB database on modulus.io
    // console.log('mongoose connect' , testqq)
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());



    // define model =================
    var trackTypeSchema = new mongoose.Schema({
        tracktype: String,
        file: { mime: String, bin: Buffer },
        cost: { type: Number, min: 0},
    })

    var stackCostSchema = new mongoose.Schema({
        stackTitle: String,
        cost: { type: Number, min: 0},
    })



    var trackSchema = new mongoose.Schema({
        name: { type: String, required: true},
        duration: { type: Number, min: 0},
        bpm: { type: Number, min: 0},
        ganre: [String],
        tags: [String],
        files: [trackTypeSchema],
            

        stack: {
            mp3wavCost: Number,
            wavseqCost: Number,
            mp3wavseqCost: Number,
        }
    })

    var Track = mongoose.model('Track', trackSchema, 'Tracks')

    var JustTrack = mongoose.model('JustTrack', {
        name: String
    })

    // console.log('Track model: ', Track, '#######################')

    // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all tracks
    app.get('/api/tracks', function(req, res) {

        // use mongoose to get all todos in the database
        // JustTrack.find(function(err, tracks) {

        //     // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        //     if (err)
        //         res.send(err)

            res.json(tracksArray = [
                    {
                        name: 'Lake',
                        duration: 200,
                        bpm: 120,
                        ganre: ['Lo-fi hip hop', 'death core'],
                        tags: ['cool', 'chill', 'anime'],
                        cost: 200
                    },{
                        name: 'angel',
                        duration: 230,
                        bpm: 110,
                        ganre: ['Classic rock'],
                        tags: ['brutal', 'relax'],
                        cost: 1500
                    },{
                        name: 'Corbon',
                        duration: 180,
                        bpm: 100,
                        ganre: ['RnB', 'Rap'],
                        tags: ['speed', 'games', 'cars', 'new wave'],
                        cost: 1000
                    },{
                        name: 'From hell to heaven',
                        duration: 315,
                        bpm: 125,
                        ganre: ['Classic rock', 'death core'],
                        tags: ['60th', 'like doors'],
                        cost: 300
                    },{
                        name: 'what am i',
                        duration: 205,
                        bpm: 165,
                        ganre: ['rythmical', 'thoughtsfull music'],
                        tags: ['yeah boy', 'think about it',  'real talk'],
                        cost: 3100
                    },{
                        name: 'if not this then what',
                        duration: 165,
                        bpm: 90,
                        ganre: ['depressive'],
                        tags: ['listen and die'],
                        cost: 700
                    },{
                        name: 'for what is worth',
                        duration: 153,
                        bpm: 95,
                        ganre: ['indie-rock'],
                        tags: ['placebo forever', 'brayan molko'],
                        cost: 5000
                    },
                ]); // return all todos in JSON format
        // });
    });

    // create todo and send back all todos after creation
    app.post('/api/tracks', function(req, res) {
        console.log('req.body ', req.body)
        // create a track, information comes from AJAX request from Angular
        // console.log('justtrack ', JustTrack)
        JustTrack.create({
            name : req.body.name,
        }, function(err, track) {
            if (err) {
                console.log('ops error POST')
                res.send(err);
            }
            console.log('1 success')
            // get and return all the tracks after you create another
            JustTrack.find(function(err, tracks) {
                if (err){
                    res.send(err)
                    console.log('ops error POST2')
                }
                res.json(tracks);
                console.log('2 success')
            });
        });

    });

    // delete a todo
    app.delete('/api/tracks/:track_id', function(req, res) {
        Track.remove({
            _id : req.params.track_id
        }, function(err, track) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Track.find(function(err, tracks) {
                if (err)
                    res.send(err)
                res.json(tracks);
            });
        });
    });


    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/angularjs/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");



    module.exports.app = app;