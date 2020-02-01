import React, { useState } from "react";

export default function SearchForm(props) {
  const [characters, setCharacters] = useState([]);
  const [result, setResult] = useState("");

  const handleChanges = event => {
    setResult(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
  }

  const search = props.characters.filter(character => {
    return character.name.indexOf(result) !== -1;
  });
  props.searching(search)
 
  return (
    <section>
    <form onSubmit={submitHandler}>
    <input
      onChange={handleChanges}
      type='text'
      name='character'
      id='character'
      placeholder='Search'
    />
    </form>
    </section>
  );

  }

