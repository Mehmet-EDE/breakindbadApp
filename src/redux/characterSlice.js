import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const charLimit = 12
export const fetchCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters?limit=${charLimit}&offset=${page * charLimit}`)
    return res.data
})
export const characterSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        status: 'idle',
        page: 0,
        isNextpage:true
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload]
            state.status = 'succeeded'
            state.page += 1
        }
    }
});
export default characterSlice.reducer