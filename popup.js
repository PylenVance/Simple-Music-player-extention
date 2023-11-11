document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = new Audio();
    const playButton = document.getElementById('PlayButton');
    const volumeSlider = document.getElementById('volumeSlider');
  
    playButton.addEventListener('click', function () {
      const extensionUrl = chrome.runtime.getURL('lofi1.mp3');
      audioPlayer.src = extensionUrl;
      audioPlayer.volume = volumeSlider.value; // Set initial volume
  
      audioPlayer.play();
    });
  
    // Update volume when the slider value changes
    volumeSlider.addEventListener('input', function () {
      audioPlayer.volume = volumeSlider.value;
      updateVolumeLabel(); // Update the volume label
    });
    function updateVolumeLabel() {
        // Display volume as a percentage
        const volumePercentage = Math.round(audioPlayer.volume * 100);
        volumeLabel.textContent = `Volume: ${volumePercentage}%`;
      }
  });
  