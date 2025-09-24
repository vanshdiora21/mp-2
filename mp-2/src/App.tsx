import { useState, useEffect } from "react";
import DogDisplay from "./components/DogDisplay";
import styled from "styled-components";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
  padding: 2rem;
  text-align: center;
`;

export default function App() {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    async function fetchDogImage() {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        setImage(data.message); // 'message' contains the image URL
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    }
    fetchDogImage();
  }, []);

  return (
    <ParentDiv>
      <h1>Random Dog Image</h1>
      <DogDisplay imageUrl={image} />
    </ParentDiv>
  );
}
