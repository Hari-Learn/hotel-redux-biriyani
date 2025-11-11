import { configureStore } from "@reduxjs/toolkit";
import biriyaniSlice from "./biriyaniSlice"

const store = configureStore({
    reducer:
        {
            biriyani : biriyaniSlice
        }
})

export default store