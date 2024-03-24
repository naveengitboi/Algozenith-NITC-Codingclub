import { configureStore } from '@reduxjs/toolkit'
import imageHoverReducer from './ImageHoverSlicer'
export const store = configureStore({
    reducer: {
        viewTalk: imageHoverReducer
    },
})