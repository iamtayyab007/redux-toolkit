{
  /*import { createSlice, nanoid } from "@reduxjs/toolkit";

const intitialState = {
  todos: [{ id: 1, text: "Hi World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  intitialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? action.payload : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
*/
}

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  editingTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      state.editingTodo = null;
    },
    setEditingTodo: (state, action) => {
      state.editingTodo = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setEditingTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
