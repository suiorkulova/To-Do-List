import React from "react";

const Menu = ({ todo , deleteTodo }) => {
  return (
    <div className="menu">
      {todo.map((el) => (
        <div className="menu--card">
          <img src={el.image} alt="" />
          <div className="menu--card__txt">
            <div>
              <h1>{el.name}</h1>
              <h2>{el.price}$</h2>
            </div>
            <button onClick={() => {
              deleteTodo(el.id)
            }}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
