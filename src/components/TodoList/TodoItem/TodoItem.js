import React from "react";

const todoItem = ({ text, completed, onStatusChange, onRemove }) => {
  return (
    <div
      onClick={() => {
        onStatusChange(!completed);
      }}
      style={{ textDecoration: completed ? "line-through" : "" }}
    >
      <span>{text}</span>
      <button
        onClick={e => {
          e.stopPropagation();
          onRemove();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default todoItem;
