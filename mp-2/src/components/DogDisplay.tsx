import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const DogImage = styled.img`
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
`;

const BreedName = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

interface DogDisplayProps {
  imageUrl: string;
  breed?: string;
}

export default function DogDisplay({ imageUrl, breed }: DogDisplayProps) {
  if (!imageUrl) return <div>Loading...</div>;
  return (
    <ImageContainer>
      <DogImage src={imageUrl} alt={breed ? `A ${breed}` : "Random Dog"} />
      {breed && <BreedName>{breed}</BreedName>}
    </ImageContainer>
  );
}
