import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    logged: false,
    dataUser: {},
}

export const userSlice = createSlice({
    name:'user',
    initialState,
        reducers:{
        loggin:(state, action) => {
            state.logged = action.payload;
        },
        addDataUser:(state, action) => {
            state.dataUser = action.payload;
        }
    }
});

export const {loggin, addDataUser} = userSlice.actions;

export const selectLogged = (state) => state.user.logged;
export const selectDataUser = (state) => state.user.dataUser;

export default userSlice.reducer;