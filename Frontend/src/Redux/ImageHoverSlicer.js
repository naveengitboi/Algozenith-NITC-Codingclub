import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 'default'
}

export const viewTalkSlice = createSlice({
    name: 'viewTalk',
    initialState,
    reducers: {
        addViewTalk: (state) => {
            state.value = 'viewTalkImg'
        },
        removeViewTalk: (state) => {
            state.value = 'default'
        }
    }
})

export const { addViewTalk, removeViewTalk } = viewTalkSlice.actions
export default viewTalkSlice.reducer