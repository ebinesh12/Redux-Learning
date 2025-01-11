import { createSlice } from "@reduxjs/toolkit";

const initState=['Ebin', 'ebin@gmail.com'];

const userSlice = createSlice({
    name:'user',
    initState,
    reducers:{
        addUsers(state,action){
            state.push(action.payload)
        }
    }
})

export const { addUsers } = userSlice.actions;
export default userSlice.reducer