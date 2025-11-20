import { createSlice } from '@reduxjs/toolkit'


const favouritesSlice = createSlice({
    name:'favouritesSlice',
    initialState: {
        contains:"",
        lenth:0
    },
    reducers: {}
});


export default favouritesSlice.reducer;