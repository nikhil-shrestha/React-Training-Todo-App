import React from "react";

import TodoItem from "./TodoItem/TodoItem";

const todoList = ({ list, onRemove, onStatusChange }) => {
  return (
    <ul>
      {list.map(({ text, completed, id }) => (
        <li key={id}>
          <TodoItem
            text={text}
            completed={completed}
            onStatusChange={newStatus => onStatusChange(id, newStatus)}
            onRemove={() => onRemove(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default todoList;
