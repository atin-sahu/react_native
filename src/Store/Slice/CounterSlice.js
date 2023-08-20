// const { createSlice } = require("@reduxjs/toolkit");

// export const CounterSlice = createSlice({
//     name:"CounterSlice",
//     initialState:{
//         loading:false,
//         count:1
//     },
//     reducers:{
//         updateCounter:(state,action) => {
//             state.count = action.payload
//         }
//     }
// })

// export const {
//     updateCounter
// } = CounterSlice.actions

// export default CounterSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count:1
}

const CounterSlice = createSlice({
  name: 'CounterSlice',
  initialState,
  reducers: {
    updateCount(state, action) {
        state.count = action.payload
    }
  }
})

export const { updateCount } = CounterSlice.actions

export default CounterSlice.reducer