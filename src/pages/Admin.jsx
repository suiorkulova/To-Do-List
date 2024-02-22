import React from "react";

const Admin = ({ setImage, setName, setPrice, addTodo }) => {
  return (
    <div id="admin">
      <div className="container">
        <div className="container--header">
          <h1>TO DO LIST</h1>
          <div>
            <input
              onChange={(e) => {
                setImage(e.target.value)
              }}
              type="text"
              placeholder="image..."
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setName(e.target.value)
              }}
              type="text"
              placeholder="name..."
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setPrice(e.target.value)
              }}
              type="text"
              placeholder="price..."
            />
          </div>
          <button onClick={addTodo}>create</button>
        </div>
      </div>
    </div>
  );      
};

export default Admin;
