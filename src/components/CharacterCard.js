import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display:flex;
    h1 {
      color: blue;
    }
    h2 {
      color: green;
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
