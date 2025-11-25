import { delay } from "@utils/delay";
import { useState } from "react";
import { Cursor, Text } from "./styled";

interface Word {
  text: string;
  pause?: boolean;
}

interface UseTypewriterProps {
  baseText: string;
  words: Word[];
}

export function useTypewriter({ baseText, words }: UseTypewriterProps) {
  const [text, setText] = useState("");

  async function nextWord() {
    // setCurrentWord((prevState) => {
    //   const index = words.findIndex((word) => word === prevState);
    //   if (index + 1 > words.length - 1) {
    //     return words[0];
    //   } else {
    //     return words[index + 1];
    //   }
    // });
    // await delay(1000);
    // start();
  }

  async function writeWord(word: string) {
    const letters = word.split("");

    for (const [index, letter] of letters.entries()) {
      setText((prevState) => (prevState += letter));

      await delay(200);

      if (index === letters.length - 1) {
        await delay(1000);

        eraseWord(letters.length);
      }
    }
  }

  async function eraseWord(wordLength: number) {
    for (let c = wordLength; c > 0; c--) {
      setText((prevState) => prevState.split("").slice(0, -1).join(""));

      await delay(200);

      if (c === 1) {
        await delay(1000);

        nextWord();
      }
    }
  }

  function start() {
    writeWord(words[0]);
  }

  function TypedText() {
    return (
      <>
        <Text>
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
