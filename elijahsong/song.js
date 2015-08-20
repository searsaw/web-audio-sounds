(function() {
    'use strict';

    var context = new AudioContext();

    var playNote = function(frequency, startTime, endTime) {
        var osc = context.createOscillator();
        var volume = context.createGain();

        volume.gain.value = 0.25;
        volume.gain.setValueAtTime(0.25, endTime - (endTime - startTime) / 3);
        volume.gain.linearRampToValueAtTime(0, endTime);

        osc.frequency.value = frequency;
        osc.frequency.type = 'triangle';

        osc.connect(volume);
        volume.connect(context.destination);

        osc.start(startTime);
        osc.stop(endTime);
    };

    var time = context.currentTime;
    playNote(440, time, time += 0.5);

    playNote(329.63, time, time += 0.16);
    playNote(329.63, time, time += 0.16);
    playNote(329.63, time, time += 0.16);

    playNote(349.23, time, time += 0.5);

    playNote(329.63, time, time += 0.5);

    time += 0.5;

    playNote(415.30, time, time += 0.5);

    playNote(440, time, time += 0.5);
})();