import './Toolbar.css'

function Toolbar() {
  return (
    <div className="toolbar">
        <div className="spacer">
            <div className="buttonbar">
                <button><img src="icon/first.png" alt="First"/></button>
                <button><img src="icon/previous.png" alt="Previous" /></button>
                <button><img src="icon/next.png" alt="Next" /></button>
                <button><img src="icon/last.png" alt="Last" /></button>
                <fieldset className="zoom-slider">
                    <legend>Zoom</legend>
                    <input type="range" min="1" max="300" defaultValue="100" />
                </fieldset>
            </div>
        </div>
        <label>Image name</label>
        <button><img src="icon/details.png" alt="Details" /></button>
    </div>
  )
}

export default Toolbar