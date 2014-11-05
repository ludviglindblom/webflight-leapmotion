(function (window, document, $, undefined) {
  'use strict';

  var handPosition,
      handRoll,
      handYaw,
      handPitch,
      handXAxis,
      handYAxis,
      keyAction,
      keyKey = 90;

  Leap.loop(function(frame) {
    frame.hands.forEach(function(hand, index) {
      handPosition = hand.screenPosition();
      handRoll = hand.roll();
      handPitch = hand.pitch();
      handXAxis = handPosition[0];
      handYAxis = handPosition[1];
      //output.innerHTML += handXAxis+", "+handYAxis+", "+handRoll+", "+handPitch+"<br>";
      //console.log(handXAxis, handYAxis, handRoll, handPitch);

      if(handPitch < -0.6) {
        keyAction = 'forwardback';
        keyKey = 90;
      } else if(handPitch > 0.5) {
        keyAction = 'forwardback';
        keyKey = 83;
      } else if(handPitch >= -0.6 && handPitch <= 0.5) {
        if(keyAction === 'forwardback') {
          keyAction = 'stop';
        }
      }

      if(handRoll < -0.6) {
        keyAction = 'rightleft';
        keyKey = 68;
      } else if(handRoll > 0.6) {
        keyAction = 'rightleft';
        keyKey = 81;
      } else if(handRoll >= -0.6 && handRoll <= 0.6) {
        if(keyAction === 'rightleft') {
          keyAction = 'stop';
        }
      }

      if(keyAction === 'forwardback') {
        $("body").trigger({type: 'keydown', which: keyKey, keyCode: keyKey});
        //console.log("keydown: "+keyKey);
      } else if(keyAction === 'stop') {
        $("body").trigger({type: 'keyup', which: keyKey, keyCode: keyKey});
        //console.log("keyup: "+keyKey);
        keyAction = 'none';
      }

      if(keyAction === 'rightleft') {
        $("body").trigger({type: 'keydown', which: keyKey, keyCode: keyKey});
        //console.log("keydown: "+keyKey);
      } else if(keyAction === 'stop') {
        $("body").trigger({type: 'keyup', which: keyKey, keyCode: keyKey});
        //console.log("keyup: "+keyKey);
        keyAction = 'none';
      }
    });
  }).use('screenPosition', {scale: 0.25});

  Leap.loopController.setBackground(true);
}(window, document, jQuery));
