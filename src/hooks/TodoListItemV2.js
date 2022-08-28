import React from 'react';

export const TodoListItemV2 = ({
  onToggleCompleted,
  taskId,
  status,
  taskName
}) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) => onToggleCompleted(taskId, event)}
      />
      <b
        style={{
          textDecoration: status === "completed" ? "line-through" : "none",
          background: status === "completed" ? "green" : "red"
        }}
      >
        Task Item: {taskName}
      </b>
    </div>
  );
};
