
"use strict";

// Simulate an asynchronous operation using Promise
function createAudioFileAsync(settings) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (settings.valid) {
        resolve("https://audio.example.com/file.mp3");
      } else {
        reject("Invalid audio settings");
      }
    }, 2000);
  });
}

// Consume the Promise
const audioSettings = { valid: false };

createAudioFileAsync(audioSettings)
  .then(result => console.log(`Audio file ready at URL: ${result}`))
  .catch(error => console.error(`Error generating audio file: ${error}`));
