import './Toolbar.css'
import type { ImageData } from './types'

interface ToolbarProps {
  currentImage: ImageData
  currentIndex: number
  totalImages: number
  showDetails: boolean
  scale: number
  onPrevious: () => void
  onNext: () => void
  onFirst: () => void
  onLast: () => void
  onToggleDetails: () => void
  onScaleChange: (scale: number) => void
}

function Toolbar({ 
  currentImage, 
  currentIndex, 
  totalImages, 
  showDetails,
  scale,
  onPrevious, 
  onNext, 
  onFirst, 
  onLast,
  onToggleDetails,
  onScaleChange
}: ToolbarProps) {
  const isFirst = currentIndex === 0
  const isLast = currentIndex === totalImages - 1

  return (
    <div className="toolbar">
        <div className="spacer">
            <div className="buttonbar">
                <button onClick={onFirst} disabled={isFirst}>
                  <img src="icon/first.png" alt="First"/>
                </button>
                <button onClick={onPrevious} disabled={isFirst}>
                  <img src="icon/previous.png" alt="Previous" />
                </button>
                <button onClick={onNext} disabled={isLast}>
                  <img src="icon/next.png" alt="Next" />
                </button>
                <button onClick={onLast} disabled={isLast}>
                  <img src="icon/last.png" alt="Last" />
                </button>
                <fieldset className="zoom-slider">
                    <legend>Zoom</legend>
                    <input 
                      type="range" 
                      min="1" 
                      max="300" 
                      value={scale}
                      onChange={(e) => onScaleChange(Number(e.target.value))}
                    />
                </fieldset>
            </div>
        </div>
        <label>{currentImage.name}</label>
        <button 
          onClick={onToggleDetails}
          className={showDetails ? 'pressed' : ''}
        >
          <img src="icon/details.png" alt="Details" />
        </button>
    </div>
  )
}

export default Toolbar