import { useState, useRef } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

function App() {

    const [windowsState, setWindowsState] = useState({
        github: false,
        note: false,
        resume: false,
        spotify: false,
        cli: false
    })

    const [textHidden, setTextHidden] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const scrollTimeout = useRef(null)

    const handleScroll = () => {
        setTextHidden(true)
        setIsScrolling(true)
        clearTimeout(scrollTimeout.current)
        scrollTimeout.current = setTimeout(() => {
            setTextHidden(false)
            setIsScrolling(false)
        }, 600)
    }

    const windowTitles = {
        github: 'GitHub',
        note: 'Notes',
        resume: 'Resume',
        spotify: 'Spotify',
        cli: 'Terminal'
    }

    const activeWindow = Object.keys(windowsState).find(key => windowsState[key]) || null

    const [activeApp, setActiveApp] = useState("Finder");

    return (
        <main onWheel={handleScroll}>
            <Nav
                setWindowsState={setWindowsState}
                activeWindow={activeWindow ? windowTitles[activeWindow] : null}
                isScrolling={isScrolling}
            />
            <div className={`hero-text ${textHidden ? 'hidden' : ''}`}>
                <p>scroll down to see magic</p>
            </div>
            <Dock
                windowsState={windowsState}
                setWindowsState={setWindowsState}
                isScrolling={isScrolling}
            />
            {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
            {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
            {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
            {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
            {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
        </main>
    )
}

export default App