import { englishToMorse, morseToEnglish, autoDetect } from "../src/morse.js";

test("English to Morse", () => {
  expect(englishToMorse("HI")).toBe(".... ..");
});

test("Morse to English", () => {
  expect(morseToEnglish(".... ..")).toBe("HI");
});

test("Detect English", () => {
  expect(autoDetect("HELLO")).toBe("english");
});

test("Detect Morse", () => {
  expect(autoDetect(".... . .-.. .-.. ---")).toBe("morse");
});

test("English with spaces", () => {
  expect(englishToMorse("HELLO WORLD")).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
});

test("Morse with spaces", () => {
  expect(morseToEnglish(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))
    .toBe("HELLO WORLD");
});
