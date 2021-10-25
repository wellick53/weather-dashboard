import { configureStore } from '@reduxjs/toolkit';
import temperatureReducer from "./temperature";

const store = configureStore({
    reducer: {
        temperature: temperatureReducer
    },
});

export default store;