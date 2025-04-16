// Utility: Stop all audios before playing a new one
const stopAllAudios = () => {
  const audios = document.querySelectorAll("audio");
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
};

// On page load
window.addEventListener("load", () => {
  stopAllAudios();
  audioCheck();
});

// Double click to start/restart voice navigation
window.addEventListener("dblclick", () => {
  stopAllAudios();
  playDefaultAudio();
});

// Audio check based on page logic
const audioCheck = () => {
  const pageAudio = document.querySelector("#python-audio");

  if (pageAudio && pageAudio.getAttribute("src") === "stop") {
    const stopAudio = document.querySelector("#stop-audio");
    stopAudio.play();
    stopAudio.addEventListener("ended", () => {
      pageAudio.setAttribute("src", "");
    });
  } else if (pageAudio && pageAudio.getAttribute("src") !== "") {
    pageAudio.play();
    pageAudio.addEventListener("ended", () => {
      playThankYouAndRestartPrompt();
    });
  }
};

// Play the intro + begin voice recognition
const playDefaultAudio = () => {
  const pageAudio = document.querySelector("#python-audio");
  if (pageAudio) pageAudio.setAttribute("src", "");

  const intro = document.querySelector("#initial-audio");
  stopAllAudios();
  intro.play();
  intro.addEventListener("ended", runSpeechRecognition, { once: true });
};

// Run voice command recognition
function runSpeechRecognition() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    const confidence = event.results[0][0].confidence;

    document.querySelector("#user-text").value = transcript;
    document.querySelector("#user-confidence").value = confidence;
    document.querySelector("#current-url").value = window.location.href;

    console.log(`Command: ${transcript} | Confidence: ${confidence}`);

    document.querySelector("#express").submit();
  };

  recognition.onerror = function (event) {
    console.error("Speech recognition error:", event.error);
  };

  recognition.start();
}

// Thank you + prompt to start or stop
function playThankYouAndRestartPrompt() {
  const thankYouAudio = document.querySelector("#thankyou-audio");
  stopAllAudios();
  thankYouAudio.play();

  thankYouAudio.addEventListener("ended", () => {
    const synth = window.speechSynthesis;
    const prompt = new SpeechSynthesisUtterance("Say start to continue or say stop to exit.");
    prompt.lang = "en-US";
    prompt.voice = synth.getVoices().find(v => v.name.includes("Male") || v.name.includes("Google US English"));
    synth.speak(prompt);

    prompt.onend = () => {
      listenForRestartOrStop();
    };
  }, { once: true });
}

// Listen for "start" or "stop" from user
function listenForRestartOrStop() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';

  recognition.onresult = function (event) {
    const response = event.results[0][0].transcript.toLowerCase();
    console.log("User said:", response);

    if (response.includes("start")) {
      playDefaultAudio();
    } else if (response.includes("stop")) {
      const stopAudio = document.querySelector("#stop-audio");
      stopAudio.play();
    } else {
      const synth = window.speechSynthesis;
      const retry = new SpeechSynthesisUtterance("I didn't understand. Please say start or stop.");
      retry.lang = "en-US";
      synth.speak(retry);
      retry.onend = () => {
        listenForRestartOrStop();
      };
    }
  };

  recognition.onerror = function (event) {
    console.error("Error listening:", event.error);
  };

  recognition.start();
}
