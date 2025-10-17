import './App.css'
import InfoView from './InfoView'
import ThumbnailViewer from './ThumbnailViewer'
import Toolbar from './Toolbar'
import Viewer from './Viewer'
import { useAppDispatch, useAppSelector } from './store/hooks'
import {
  setCurrentImageIndex,
  nextImage,
  previousImage,
  firstImage,
  lastImage,
  toggleDetails,
  setCurrentImageScale,
} from './store/imageViewerSlice'

function App() {
  const dispatch = useAppDispatch()
  const { images, currentImageIndex, showDetails } = useAppSelector((state) => state.imageViewer)
  const currentImage = images[currentImageIndex]

  const handlePrevious = () => {
    dispatch(previousImage())
  }

  const handleNext = () => {
    dispatch(nextImage())
  }

  const handleFirst = () => {
    dispatch(firstImage())
  }

  const handleLast = () => {
    dispatch(lastImage())
  }

  const handleThumbnailClick = (index: number) => {
    dispatch(setCurrentImageIndex(index))
  }

  const handleToggleDetails = () => {
    dispatch(toggleDetails())
  }

  const handleScaleChange = (newScale: number) => {
    dispatch(setCurrentImageScale(newScale))
  }

  return (
    <>
      <ThumbnailViewer 
        images={images}
        currentIndex={currentImageIndex}
        onThumbnailClick={handleThumbnailClick}
      />
      <div className="main-div">
        <Toolbar 
          currentImage={currentImage}
          currentIndex={currentImageIndex}
          totalImages={images.length}
          showDetails={showDetails}
          scale={currentImage.scale}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onFirst={handleFirst}
          onLast={handleLast}
          onToggleDetails={handleToggleDetails}
          onScaleChange={handleScaleChange}
        />
        <div className='viewer-div'>
          <Viewer 
            image={currentImage}
            scale={currentImage.scale}
          />
          {showDetails && (
            <InfoView 
              image={currentImage}
              index={currentImageIndex}
              totalImages={images.length}
              scale={currentImage.scale}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App

