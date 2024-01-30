import React from "react";

const ListItem = ({ item, onDelete }) => {
  return (
    <li className="list-item">
      <span className={item.isCompleted ? "completed" : ""}>{item.title}</span>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};

export default ListItem;
