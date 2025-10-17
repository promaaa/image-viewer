import './Viewer.css'
import type { ImageData } from './types'

interface ViewerProps {
  image: ImageData
  scale: number
}

function Viewer({ image, scale }: ViewerProps) {
  return (
    <div className="viewer">
      <img 
        src={image.path} 
        alt={image.name}
        style={{ 
          width: `${scale}%`,
          height: 'auto',
          maxWidth: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  )
}

export default Viewer