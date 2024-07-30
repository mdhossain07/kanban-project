import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [
    {
      id: "1",
      title: "Task 1",
      description: "This is task 1 description",
      deadline: "2023-10-31",
      status: "todo",
      assign: "John Doe",
      priority: "High",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.allTasks.push({
        id: crypto.randomUUID(),
        status: "todo",
        ...payload,
      });
    },

    updateStatus: (state, { payload }) => {
      const updatedTask = state.allTasks.find((task) => task.id === payload.id);
      if (updatedTask) {
        updatedTask.status = payload.status;
      }
    },

    removeTask: (state, { payload }) => {
      state.allTasks = state.allTasks.filter((task) => task.id !== payload);
    },
  },
});

export const { addTask, updateStatus, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
