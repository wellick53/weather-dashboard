import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
                        temperature: 0, 
                        city: "", 
                        country: "", 
                        icons: [],
                        description: [],
                        windSpeed: 0,
                        humidity: 0
                    
                    };

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        reset: state => {
            state.temperature = "not available";
        },
        updateData(state, action) {
            console.log(action);
            state.temperature = action.payload.temperature;
            state.city = action.payload.city;
            state.country = action.payload.country;
            state.icons = action.payload.icons
            state.description = action.payload.description
            state.windSpeed = action.payload.windSpeed
            state.humidity = action.payload.humidity
            state.visibility = action.payload.visibility
        },        
    } 
    })



// Extract the action creators object and the reducer
const { actions, reducer } = weatherSlice

// Extract and export each action creator by name
export const { reset, updateData } = actions

// Export the reducer, either as a default or named export

export default weatherSlice.reducer