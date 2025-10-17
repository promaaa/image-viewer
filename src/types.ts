// Types pour l'application
export interface ImageData {
  id: number
  path: string
  name: string
  scale: number
}

export interface ImageViewerState {
  images: ImageData[]
  currentImageIndex: number
  showDetails: boolean
}
