import './ThumbnailViewer.css'
import type { ImageData } from './types'

interface ThumbnailViewerProps {
  images: ImageData[]
  currentIndex: number
  onThumbnailClick: (index: number) => void
}

function ThumbnailViewer({ images, currentIndex, onThumbnailClick }: ThumbnailViewerProps) {
  return (
    <div className="thumbnailViewer">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.path}
          alt={image.name}
          onClick={() => onThumbnailClick(index)}
          className={index === currentIndex ? 'thumbnail-active' : 'thumbnail'}
        />
      ))}
    </div>
  )
}

export default ThumbnailViewer