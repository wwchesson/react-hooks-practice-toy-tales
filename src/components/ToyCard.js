import React from "react";

function ToyCard({name, image, likes, id, onDeleteToy, onLikeClick}) {
  

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={() => onLikeClick(id, likes + 1)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onDeleteToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
