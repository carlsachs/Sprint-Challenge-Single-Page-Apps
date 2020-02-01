import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-content: center;
    h1 {
      color: blue;
      text-align: center;
    }
    h2 {
      color: green;
      text-align: center;
    }

`;

export default function CharacterCard(props) {
  return (
    <Card>
      <h1>Name: {props.name}</h1>
        <h2>Status: {props.status}</h2>
        <h2>Species: {props.species}</h2>
        <h2>Gender: {props.gender}</h2>
    </Card>
  )
}
