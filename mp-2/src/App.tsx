import { useState, useEffect } from "react";
import EmojiDisplay from "./components/EmojiDisplay";
import styled from "styled-components";
import type { Emoji } from "./interfaces/Emoji";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkmagenta solid;
  padding: 2rem;
  text-align: center;
`;

export default function App() {
  const [emoji, setEmoji] = useState<Emoji | null>(null);

  useEffect(() => {
    async function fetchRandomEmoji() {
      try {
        const response = await fetch(
          "https://emojihub.yurace.pro/api/random"
        );
        const data: any = await response.json();
        const emojiData: Emoji = {
          name: data.name,
          category: data.category,
          group: data.group,
          htmlCode: data.htmlCode,
          unicode: data.unicode,
        };
        setEmoji(emojiData);
      } catch (error) {
        console.error("Error fetching emoji:", error);
      }
    }
    fetchRandomEmoji();
  }, []);

  return (
    <ParentDiv>
      <h1>Random Emoji</h1>
      <EmojiDisplay emoji={emoji} />
    </ParentDiv>
  );
}
