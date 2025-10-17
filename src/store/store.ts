import { configureStore } from '@reduxjs/toolkit'
import imageViewerReducer from './imageViewerSlice'

export const store = configureStore({
  reducer: {
    imageViewer: imageViewerReducer,
  },
})

// Types pour TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
