import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'default'
}

export const viewTalkSlice = createSlice({
    name: 'viewTalk',
    initialState,
    reducers: {
        removeCursorChange: (state) => {
            state.value = 'default'
        },
        withCursor: (state, action) => {
            if (action.payload == 'drag') {
                state.value = 'draggerImage'
            }
            else if (action.payload == 'viewTalk') {
                state.value = 'viewTalkImg'
            }
        }
    }
})

export const { withCursor, removeCursorChange } = viewTalkSlice.actions
export default viewTalkSlice.reducer