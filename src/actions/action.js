export const changeTodo = (todo) => {
  return {
    type: "CHANGE_TODO",
    payload: todo,
  };
};
