import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchNumber = createAsyncThunk(
    "fetchNumber",
    async () => {
        try {
            const response = await fetch(`https://hcmut-spss-server.azurewebsites.net/api/v1/Email/getOTPByEmail/hnm142758@gmail.com`, {
                method: 'GET',
            })
            if (!response.ok) {
                return rejectWithValue(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data; // Success case
        } catch (error) {
            throw error; // Re-throw the error for handling in the rejected case
        }
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        isLoading: false,
        value: 0,
        error: null
    },
    reducers: {
        increment: (state) => {
            state.value += 1; // Mutations are safe with Immer
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => { // Use extraReducers for handling async actions
        builder
            .addCase(fetchNumber.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNumber.fulfilled, (state, action) => {
                const value = parseInt(action.payload.data.otp_code, 10);
                state.isLoading = false;
                state.value = value;
            })
            .addCase(fetchNumber.rejected, (state, action) => {
                state.error = action.error.message; // Extract error message
            });
    },
});

export const selectCounterValue = (state) => state.counter.value;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
