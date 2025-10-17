import { useEffect, useState } from 'react'
import './InfoView.css'
import type { ImageData } from './types'

interface InfoViewProps {
  image: ImageData
  index: number
  totalImages: number
  scale: number
}

function InfoView({ image, index, totalImages, scale }: InfoViewProps) {
  const [resolution, setResolution] = useState<{ width: number; height: number } | null>(null)
  
  useEffect(() => {
    // Créer un élément image pour obtenir les dimensions réelles
    const img = new Image()
    img.onload = () => {
      setResolution({ width: img.naturalWidth, height: img.naturalHeight })
    }
    img.src = image.path
  }, [image.path])

  // Extract format from path
  const format = image.path.split('.').pop()?.toUpperCase() || 'N/A'
  
  // Calculate file size path
  const fileName = image.path.split('/').pop() || image.path

  return (
    <div className="info-view">
      <h3>📷 Image Information</h3>
      <div style={{ lineHeight: '1.8' }}>
        <p><strong>Name:</strong> {image.name}</p>
        <p><strong>Filename:</strong> {fileName}</p>
        <p><strong>Path:</strong> {image.path}</p>
        <p><strong>Index:</strong> {index + 1} / {totalImages}</p>
        <p><strong>Format:</strong> {format}</p>
        {resolution && (
          <p><strong>Resolution:</strong> {resolution.width} × {resolution.height} px</p>
        )}
        <p><strong>Current Scale:</strong> {scale}%</p>
        {resolution && (
          <p><strong>Display Size:</strong> {Math.round(resolution.width * scale / 100)} × {Math.round(resolution.height * scale / 100)} px</p>
        )}
      </div>
    </div>
  )
}

export default InfoView