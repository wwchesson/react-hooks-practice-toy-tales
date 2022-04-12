import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0,
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newToy) => {
        onAddToy(newToy);
        setFormData({
          name: "",
          image: "",
          likes: 0,
        })
      });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
