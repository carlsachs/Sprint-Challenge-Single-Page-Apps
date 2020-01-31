import React, { useState } from "react";

export default function SearchForm(props) {
  const [result, setResult] = useState();
  const handleChanges = event => {
    setResult(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
  }
 
  return (
    <section className="search-form">
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

