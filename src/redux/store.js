import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from "./weather";

const store = configureStore({
    reducer: {
        weather: weatherReducer
    },
});

export default store;