import { englishToMorse, morseToEnglish, autoDetect } from "./morse.js";

document.getElementById("translateBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value.trim();
  const output = document.getElementById("outputText");

  if (input === "") {
    output.value = "Please enter some text.";
    return;
  }

  const inputType = autoDetect(input);

  if (inputType === "english") {
    output.value = englishToMorse(input);
  } else {
    output.value = morseToEnglish(input);
  }
});
