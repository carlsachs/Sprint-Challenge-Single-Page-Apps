import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm";
import WelcomePage from "./WelcomePage";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [dataIsFiltered, setDataIsFiltered] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response);
        // setCharacters(response.data.results);
        // setDataIsFiltered(response.data.results);
      })
        .catch(error => {
          console.error(error);
      });
  }, []);

  return (
    <div>
      <Link to="/WelcomePage" component={WelcomePage}>Back to Home</Link>
      <SearchForm />
      {dataIsFiltered.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
        />
           ))}
    </div>
  );
}
