import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/storeSource/slice"


export default configureStore({
    reducer: {
        counter:counterReducer
    }
})

