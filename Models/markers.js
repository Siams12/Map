import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const markerSlice = createSlice({
  name: "markers",
  initialState: {
    value: [],
  },
  reducers: {
    addMarker: (state, action) => {
      state.value.push(action.payload);
    },
    deleteMarker: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    resetMarker: (state, action) => {
      state.value = []
    }
    // clearMessages: (state, action) => {
    //     state.value = [];
    // },
    // setList: (state, action) => {
    //     state.value = action.payload;
    // },
    // deleteMessage: (state, action) => {
    //     state.value.splice(action.payload, 1)
    // },
    // markMessage: (state, action) => {
    //     if (state.value[action.payload].delete == true) {
    //         state.value[action.payload].delete = false;
    //     }
    //     else {
    //         state.value[action.payload].delete = true;
    //     }
    // }
  },
});
export const { addMarker, deleteMarker, resetMarker } = markerSlice.actions;
export default markerSlice.reducer;
