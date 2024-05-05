import { createSlice, nanoid } from "@reduxjs/toolkit";

export const userDetail = createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading: false,
        error: null,
    },
    reducers:{
        addUser:(state,action)=>{
                let user = {};
                user.name = action.payload.name;
                user.age = action.payload.age;
                user.email = action.payload.email;
                user.gender = action.payload.gender;
                user.id = nanoid();
                state.users.push(user);
            },
            deleteUser:(state,action)=>{
                state.users= state.users.filter((e)=>e.id!==action.payload);
            },
            updateUser: (state, action) => {
                const { id, name, email, age } = action.payload;
                const userIndex = state.users.findIndex(user => user.id === id);
                if (userIndex !== -1) {
                  state.users[userIndex] = { ...state.users[userIndex], name, email, age };
                }
              }
        }
})
export const {addUser, deleteUser, updateUser}=userDetail.actions;
export default userDetail.reducer;