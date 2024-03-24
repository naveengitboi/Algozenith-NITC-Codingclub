import { configureStore } from '@reduxjs/toolkit'
import imageHoverReducer from './ImageHoverSlicer'
console.log(imageHoverReducer)
export const store = configureStore({
    reducer: {
        viewTalk: imageHoverReducer,
    },
})