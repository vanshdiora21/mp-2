import styled from "styled-components";
import { Emoji } from "../interfaces/Emoji";

const EmojiContainer = styled.div`
  border: 2px solid darkmagenta;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 400px;
  text-align: center;
  border-radius: 10px;
  background-color: #f7f0f7;
`;

const EmojiSymbol = styled.span`
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
`;

const EmojiName = styled.h2`
  margin: 0.5rem 0;
`;

const EmojiInfo = styled.p`
  margin: 0.2rem 0;
  font-style: italic;
`;

export default function EmojiDisplay({ emoji }: { emoji: Emoji | null }) {
  if (!emoji) {
    return <div>Loading Emoji...</div>;
  }

  return (
    <EmojiContainer>
      <EmojiSymbol
        dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}
        aria-label={emoji.name}
      />
      <EmojiName>{emoji.name}</EmojiName>
      <EmojiInfo>Category: {emoji.category}</EmojiInfo>
      <EmojiInfo>Group: {emoji.group}</EmojiInfo>
    </EmojiContainer>
  );
}
