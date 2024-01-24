import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    searchFilter: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    searchFilter: (state, action) => {
      const key = action.payload;
      console.log(key);

      const filteredItems = state.items.filter((item) =>
        item.task.startsWith(key)
      );
      console.log("filtred items " + filteredItems);
      state.items = filteredItems;
    },
  },
});

export const { addTodo, searchFilter } = todoSlice.actions;
export default todoSlice.reducer;
