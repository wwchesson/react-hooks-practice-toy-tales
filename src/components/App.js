import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toys) => setToys(toys));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedToys = toys.filter((toy) => toy.id !== id);
        setToys(updatedToys);
      });
  }

  function handleLikes(id, likes) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes }),
    })
      .then((r) => r.json())
      .then((updatedToy) => {
        const updatedToys = toys.map((toy) => {
          if (toy.id === updatedToy.id) {
            return updatedToy;
          } else {
            return toy;
          }
        });
        setToys(updatedToys);
      });
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        setToys={setToys}
        onDeleteToy={handleDelete}
        onLikeClick={handleLikes}
      />
    </>
  );
}

export default App;
