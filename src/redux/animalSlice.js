import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

// Thunk to fetch animals from API
export const fetchAnimals = createAsyncThunk('animals/fetchAnimals', async () => {
    const response = await api.get('/animals');
    return response.data;
});

const animalSlice = createSlice({
    name: 'animals',
    initialState: { list: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAnimals.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    }
});

export default animalSlice.reducer;
