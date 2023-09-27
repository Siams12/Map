import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
const historySlice = createSlice({
name: 'history',
initialState: {
value: []
},
reducers: 
{
    addMessage: (state, action) => {
        state.value.push(action.payload)
        },
    clearMessages: (state, action) => {
        state.value = [];
    },
    setList: (state, action) => {
        state.value = action.payload;
    },
    deleteMessage: (state, action) => {
        state.value.splice(action.payload, 1)
    },
    markMessage: (state, action) => {
        if (state.value[action.payload].delete == true) {
            state.value[action.payload].delete = false;
        }
        else {
            state.value[action.payload].delete = true;
        }
    }
 
    }
    })
    export const { addMessage, clearMessages, deleteMessage, markMessage, setList} = historySlice.actions
    export default historySlice.reducer