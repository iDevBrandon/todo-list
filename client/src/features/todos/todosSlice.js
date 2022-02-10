import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:8800/api/todos";

const initialState = {
  todos: [],
};

// Action creators for the slice
export const createTodo = createAsyncThunk(
  "todos/createTodos",
  async (todo) => {
    const response = await axios.post(baseURL, todo);
    return response.data;
  }
);

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const updateTodos = createAsyncThunk(
  "todos/updateTodos",
  async (todo) => {
    const response = await axios.put(`${baseURL}/${todo._id}`, todo);
    return response.data;
  }
);

// delete
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
      // state.todos.push(action.payload);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
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

    [updateTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };
    },

    [deleteTodos.pending]: () => {
      console.log("pending");
    },

    [deleteTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    },
  },
});

export default todoSlice.reducer;
