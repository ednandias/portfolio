import { delay } from "@utils/delay";
import { useState } from "react";
import { Cursor } from "./styles";

export function useTypewriter(baseWord: string) {
  const [text, setText] = useState("");

  async function writeWord(word: string) {
    for (const letter of word) {
      await delay(100);

      setText((prevState) => (prevState += letter));
    }
  }

  function start() {
    writeWord(baseWord);
  }

  const TypedText = () => (
    <>
      <p>{text}</p>

      <Cursor />
    </>
  );

  return {
    start,
    TypedText,
  };
}
