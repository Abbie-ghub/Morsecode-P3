export const morseCodeMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--.."
};

export const englishToMorse = (text) => {
  return text
    .toUpperCase()
    .split("")
    .map(char => {
      if (char === " ") return " / ";  
      return morseCodeMap[char] || "";
    })
    .join(" ");
};

export const morseToEnglish = (morse) => {
  const reverseMap = Object.fromEntries(
    Object.entries(morseCodeMap).map(([letter, code]) => [code, letter])
  );

  return morse
    .trim()
    .split(" ")
    .map(code => {
      if (code === "/") return " ";
      return reverseMap[code] || "";
    })
    .join("");
};

export const autoDetect = (input) => {
  return /^[.\-/\s]+$/.test(input) ? "morse" : "english";
};
