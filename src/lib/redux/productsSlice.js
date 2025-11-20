import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name:'productsSlice',
    initialState: {
        productsUploaded:"",
        productsResold:"",
        sales:0
    },
    reducers: {}
});


export default productsSlice.reducer;