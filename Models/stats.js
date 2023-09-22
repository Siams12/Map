import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
const statsSlice = createSlice({
name: 'stats',
initialState: {
    numDecrypted: 0,
    numEncrypted: 0
},
reducers: {
numEncryptedIncrement: state => {
    state.numEncrypted += 1
    },
numEncryptedReset: state => {
    state.numEncrypted = 0
    },
numDecryptedIncrement: state => {
    state.numDecrypted += 1
    },
numDecryptedreset: state => {
    state.numDecrypted = 0
    }
}
})

export const { numEncryptedIncrement, numEncryptedReset, numDecryptedIncrement, numDecryptededReset } =
statsSlice.actions
export default statsSlice.reducer;