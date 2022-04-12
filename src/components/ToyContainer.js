import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys, onDeleteToy, onLikeClick }) {
  const toysToDisplay = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      name={toy.name}
      image={toy.image}
      id={toy.id}
      likes={toy.likes}
      onDeleteToy={onDeleteToy}
      onLikeClick={onLikeClick}
    />
  ));

  return <div id="toy-collection">{toysToDisplay}</div>;
}

export default ToyContainer;
