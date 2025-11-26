import { delay } from "@utils/delay";
import { useRef, useState } from "react";
import { Cursor, Text } from "./styled";

interface Word {
  text: string;

  pause?: boolean;
}

interface UseTypewriterProps {
  baseText: string;
  color?: string;
  fontSize?: number;
  words: Word[];
}

export function useTypewriter({
  baseText,
  fontSize,
  color,
  words,
}: UseTypewriterProps) {
  const [text, setText] = useState("");
  const wordIndexRef = useRef(0);

  async function nextWord() {
    wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
    await delay(1000);
    writeWord();
  }

  async function writeWord() {
    const currentWordText = words[wordIndexRef.current].text;
    const letters = currentWordText.split("");

    for (const [index, letter] of letters.entries()) {
      setText((prevState) => prevState + letter);
      await delay(100);

      if (index === letters.length - 1 && !words[wordIndexRef.current].pause) {
        await delay(1000);
        eraseWord(letters.length);
      }
    }
  }

  async function eraseWord(wordLength: number) {
    for (let c = wordLength; c > 0; c--) {
      setText((prevState) => prevState.slice(0, -1));
      await delay(100);

      if (c === 1) {
        nextWord();
      }
    }
  }

  function start() {
    writeWord();
  }

  function TypedText() {
    return (
      <>
        <Text color={color} fontSize={fontSize}>
          {baseText} {text}
        </Text>

        <Cursor />
      </>
    );
  }

  return {
    start,
    TypedText,
  };
}
