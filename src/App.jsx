import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import ClockWidget from './components/windows/ClockWidget'
import ContextMenu from './components/ContextMenu'

const wallpapers = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=1920&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80",
]

function App() {

    const [windowsState, setWindowsState] = useState({
        github: false,
        note: false,
        resume: false,
        spotify: false,
        cli: false
    })

    const [wallpaper, setWallpaper] = useState(wallpapers[0])

    const [contextMenu, setContextMenu] = useState({
        visible: false,
        x: 0,
        y: 0
    })

    const handleRightClick = (e) => {
        e.preventDefault()
        setContextMenu({ visible: true, x: e.clientX, y: e.clientY })
    }

    const handleClick = () => {
        setContextMenu({ ...contextMenu, visible: false })
    }

    return (
        <main
            onContextMenu={handleRightClick}
            onClick={handleClick}
            style={{
                backgroundImage: `url(${wallpaper})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Nav setWindowsState={setWindowsState} />
            <ClockWidget />
            <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
            {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
            {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
            {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
            {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
            {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}

            {contextMenu.visible && (
                <ContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    wallpapers={wallpapers}
                    currentWallpaper={wallpaper}
                    onSelect={(w) => {
                        setWallpaper(w)
                        setContextMenu({ ...contextMenu, visible: false })
                    }}
                    onClose={() => setContextMenu({ ...contextMenu, visible: false })}
                />
            )}
        </main>
    )
}

export default App