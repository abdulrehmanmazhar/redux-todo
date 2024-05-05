import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../features/todo/userDetailSlice";
export const store = configureStore({
    reducer:{
        app: userDetail,
    },
})