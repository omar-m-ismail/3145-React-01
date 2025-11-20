import { createSlice } from '@reduxjs/toolkit'


const friendsSlice = createSlice({
    name: 'friendsSlice',
    initialState: {
        amount:0,
        friends:'',
        birthdays:'',
        requests:''
    },
    reducers: {}
});

export default friendsSlice.reducer;