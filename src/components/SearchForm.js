import React, { useState } from "react";

export default function SearchForm(props) {
  const [result, setResult] = useState();
  const handleChanges = event => {
    console.log(result);
    setResult(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
  }

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
