import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8800/api/todos";

const initialState = {
  todos: [],
};

export const createTodo = createAsyncThunk(
  "todos/createTodos",
  async (data) => {
    const response = await axios.post(baseURL, { todo: data });
    return response.data;
  }
);

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const deleteTodos = createAsyncThunk("todos/deleteTodos", async (id) => {
  const response = await axios.delete(`${baseURL}/${id}`);
  return response.data;
});

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [createTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },

    [fetchTodos.pending]: () => {
      console.log("pending");
    },

    [fetchTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload };
    },
    [fetchTodos.rejected]: () => {
      console.log("Rejected!");
    },

    [deleteTodos.fulfilled]: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
  },
});

export default todoSlice.reducer;
