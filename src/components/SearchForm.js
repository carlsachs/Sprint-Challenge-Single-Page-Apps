import React, { useState } from "react";


// export default function SearchForm(props) {
//   const [characters, setCharacters] = useState([]);
//   const [result, setResult] = useState("");

//   const handleChanges = event => {
//     setResult(event.target.value);
//   };

//   const submitHandler = event => {
//     event.preventDefault();
//   }
  
//   const search = characters.filter(character => {
//     return character.name.indexOf(result) !== -1;
//   });
//   console.log(search);
 

//   return (
//     <section>
//     <form onSubmit={submitHandler}>
//     <input
//       onChange={handleChanges}
//       type='text'
//       name='character'
//       id='character'
//       placeholder='Search'
//     />
//     </form>
//     </section>
//   );

//   }

export default function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const charSearch = props.characters.filter(char => {
      return char.name.toLowerCase().includes(results.toLowerCase());
    });
    props.search(charSearch);
    console.log(charSearch);
  };


  return (
    <section>
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges}
          type="text"
          name="character"
          id="character"
          placeholder="Search"
        >
        </input>
      </form>
    </section>
  );
  }