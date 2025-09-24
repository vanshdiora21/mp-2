import { useState, useEffect } from "react";
import DogDisplay from "./components/DogDisplay";
import styled from "styled-components";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
  padding: 2rem;
`;

export default function App() {
  const [image, setImage] = useState<string>("");
  const [breed, setBreed] = useState<string>("");

  useEffect(() => {
    async function fetchDogImage() {
      try {
        const res = await fetch(
          "https://api.thedogapi.com/v1/images/search?has_breeds=true&limit=1",
          {
            headers: {
              "x-api-key": "live_OIW8swKt97Hi0yzCrReJgxonpWQVkNWhXtPgn6h9I1QBvEZh6EvUheSouHKNwJbT"
            }
          }
        );
        const data = await res.json();
        if (data.length > 0) {
          setImage(data[0].url);
          if (data[0].breeds && data[0].breeds.length > 0) {
            setBreed(data[0].breeds[0].name);
          } else {
            setBreed("");
          }
        }
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    }
    fetchDogImage();
  }, []);

  return (
    <ParentDiv>
      <h1>Random Dog Image</h1>
      <DogDisplay imageUrl={image} breed={breed} />
    </ParentDiv>
  );
}
