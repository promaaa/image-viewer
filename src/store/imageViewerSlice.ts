import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ImageViewerState } from '../types'

// Initialisation des images avec un scale par défaut de 100%
const initialImages = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  path: `img_${String(i + 1).padStart(3, '0')}.jpg`,
  name: `Image ${i + 1}`,
  scale: 100,
}))

const initialState: ImageViewerState = {
  images: initialImages,
  currentImageIndex: 0,
  showDetails: false,
}

const imageViewerSlice = createSlice({
  name: 'imageViewer',
  initialState,
  reducers: {
    setCurrentImageIndex: (state, action: PayloadAction<number>) => {
      state.currentImageIndex = action.payload
    },
    nextImage: (state) => {
      if (state.currentImageIndex < state.images.length - 1) {
        state.currentImageIndex += 1
      }
    },
    previousImage: (state) => {
      if (state.currentImageIndex > 0) {
        state.currentImageIndex -= 1
      }
    },
    firstImage: (state) => {
      state.currentImageIndex = 0
    },
    lastImage: (state) => {
      state.currentImageIndex = state.images.length - 1
    },
    toggleDetails: (state) => {
      state.showDetails = !state.showDetails
    },
    setImageScale: (state, action: PayloadAction<{ index: number; scale: number }>) => {
      const { index, scale } = action.payload
      if (state.images[index]) {
        state.images[index].scale = scale
      }
    },
    setCurrentImageScale: (state, action: PayloadAction<number>) => {
      const currentImage = state.images[state.currentImageIndex]
      if (currentImage) {
        currentImage.scale = action.payload
      }
    },
  },
})

export const {
  setCurrentImageIndex,
  nextImage,
  previousImage,
  firstImage,
  lastImage,
  toggleDetails,
  setImageScale,
  setCurrentImageScale,
} = imageViewerSlice.actions

export default imageViewerSlice.reducer
