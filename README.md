webflight-leapmotion
=================

This is a plugin for the browser-based AR.Drone ground control station
[webflight](http://eschnou.github.io/ardrone-webflight/) that lets you
fly your drone with a [Leap Motion Controller](http://www.leapmotion.com/).

This plugin is still in alpa and you can only controll your drone
forwards, backwards, left, and right. There is yet no implementation
for altitude, flips, or rotation.


## Running the software

You will need the
[ardrone-webflight](https://github.com/eschnou/ardrone-webflight) and
webflight-leapmotion repos:

```
git clone git://github.com/eschnou/ardrone-webflight.git
git clone git://github.com/ludviglindblom/webflight-leapmotion.git
```

Run `npm install` for each:

```
(cd ardrone-webflight && npm install)
(cd webflight-leapmotion && npm install)
```

Link `webflight-leapmotion` into webflight's `plugins` directory:

```
(cd ardrone-webflight/plugins && ln -s ../../webflight-leapmotion leapmotion)
```

Copy ardrone-webflight's `config.js.example` to `config.js`:

```
(cd ardrone-webflight && cp config.js.example config.js)
```

Add `"leapmotion"` to the `plugins` array in `config.js`,
so it looks something like this:

```
var config = {
    plugins: [
      "video-stream"    // Display the video as a native h264 stream decoded in JS
      , "hud"           // Display the artificial horizon, altimeter, compass, etc.
      , "pilot"         // Pilot the drone with the keyboard
      , "leapmotion"    // Pilot the drone with a joystick/leapmotion
    ]
};

module.exports = config;
```


### Start the server

Now you can start the webflight server:

```
(cd ardrone-webflight && node app.js)
```

Plugin your leapmotion, point your browser at http://localhost:3000/ and
then press t to activate takeoff of your drone, then use hand gestaures
to pilot your drone.

Tilt hand forwards = fly drone forwards
Tilt hand backwards = fly drone backwards
Tilt hand left = fly drone left
Til hand right = fly drone right
