import { createSlice } from '@reduxjs/toolkit';

// default state
const initialState = {
    status   : 'stopped',    // playing, paused or stopped
    label    : 'Session',    // which timer is running
    color    : 'green',
    limit    : 3000,         // current limit  
    value    : 3000,         // current timer value
    count    : 0,            // number of sessions completed
};

// todo: fix reducers to be more descriptively named.
const timerSlice = createSlice({
    name: 'timer',
    initialState, 
    reducers: {
        setStatus: {
            reducer: (state, action) => { state.status = action.payload; },
            prepare: (status) => ({payload: status})
        },
        setTick: {
            reducer: (state, action) => { state.tick = action.payload; },
            prepare: (tick) => ({payload: tick})
        },
        setValue: {
            reducer: (state, action) => { state.value = action.payload; },
            prepare: (value) => ({payload: value})
        },
        setParams: {
            reducer: (state, action) => { 
                state.label = action.payload.label;
                state.limit = action.payload.limit;
                state.color = action.payload.color;
            },
            prepare: (params) => ({payload: params})
        },
        incrementCount: {
            reducer: (state) => { state.count = state.count + 1; }
        }

    }
});

export const actions = timerSlice.actions;
export default timerSlice.reducer;