(function() {
    'use strict';

    var context = new AudioContext();

    var playNote = function(frequency, startTime, endTime) {
        var osc = context.createOscillator();
        var osc2 = context.createOscillator();
        var volume = context.createGain();

        volume.gain.value = 0.5;
        volume.gain.setValueAtTime(0.5, endTime - (endTime - startTime) / 3);
        volume.gain.linearRampToValueAtTime(0, endTime);

        osc.frequency.value = frequency;
        osc2.frequency.value = frequency;

        osc.detune.value = -5;
        osc2.detune.value = 5;

        osc.frequency.type = 'triangle';
        osc2.frequency.type = 'triangle';

        osc.connect(volume);
        osc2.connect(volume);

        volume.connect(context.destination);

        osc.start(startTime);
        osc.stop(endTime);

        osc2.start(startTime);
        osc2.stop(endTime);
    };

    var time = context.currentTime;

    playNote(493.88, time, time += 0.17); // B4

    playNote(392.00, time, time += 0.17); // G4

    playNote(587.33, time, time + 0.17); // D5
    playNote(783.99, time, time += 0.17); // G5

    playNote(392.00, time, time += 0.17); // G4

    playNote(587.33, time, time += 0.17); // D5

    playNote(659.25, time, time + 0.17); // E5
    playNote(987.77, time, time += 0.17); // B5

    playNote(587.33, time, time += 0.17); // D5

    playNote(392.00, time, time += 0.17); // G4

    playNote(659.25, time, time + 0.17); // E5
    playNote(987.77, time, time += 0.17); // B5

    playNote(587.33, time, time += 0.17); // D5

    playNote(392.00, time, time += 0.17); // G4

    playNote(587.33, time, time + 0.17); // D5
    playNote(783.99, time, time += 0.17); // G5
})();