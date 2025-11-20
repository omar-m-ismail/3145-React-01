import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cartSlice',
    initialState: {
        contains:"nothing",
        length:0
    },
    reducers: {}
});


export default cartSlice.reducer;