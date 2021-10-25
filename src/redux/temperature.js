import { createSlice } from '@reduxjs/toolkit';

const initialState = { temperature: 33 };

const temperatureSlice = createSlice({
    name: 'temperature',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        }
    },
})

export const { increment } = temperatureSlice.actions

export default temperatureSlice.reducer