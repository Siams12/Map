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
    deleteMessage: (state, action) => {
        state.value.splice(action.payload, 1)
    }
    }
    })
    export const { addMessage, clearMessages, deleteMessage} = historySlice.actions
    export default historySlice.reducer