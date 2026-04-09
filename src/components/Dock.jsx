import React, { useRef } from 'react'
import "./dock.scss"

const Dock = ({ windowsState, setWindowsState, isScrolling }) => {
    const dockRef = useRef(null)

    const handleMouseMove = (e) => {
        const icons = dockRef.current.querySelectorAll('.icon')
        icons.forEach((icon) => {
            const rect = icon.getBoundingClientRect()
            const iconCenter = rect.left + rect.width / 2
            const distance = Math.abs(e.clientX - iconCenter)
            const maxDistance = 120
            if (distance < maxDistance) {
                const scale = 1.5 - (distance / maxDistance) * 0.5
                const translateY = -((1 - distance / maxDistance) * 14)
                icon.style.transform = `scale(${scale}) translateY(${translateY}px)`
            } else {
                icon.style.transform = 'scale(1) translateY(0px)'
            }
        })
    }

    const handleMouseLeave = () => {
        const icons = dockRef.current.querySelectorAll('.icon')
        icons.forEach((icon) => {
            icon.style.transform = 'scale(1) translateY(0px)'
        })
    }

    return (
        <footer
            className={`dock ${isScrolling ? 'scrolling' : ''}`}
            ref={dockRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div onClick={() => { setWindowsState(state => ({ ...state, github: true })) }} className="icon github" data-name="GitHub"><img src="/doc-icons/github.svg" alt="" /></div>
            <div onClick={() => { setWindowsState(state => ({ ...state, note: true })) }} className="icon note" data-name="Note"><img src="/doc-icons/note.svg" alt="" /></div>
            <div onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }} className="icon pdf" data-name="Resume"><img src="/doc-icons/pdf.svg" alt="" /></div>
            <div onClick={() => { window.open("https://calendar.google.com/", "_blank") }} className="icon calender" data-name="Calendar"><img src="/doc-icons/calendar.svg" alt="" /></div>
            <div onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }} className="icon spotify" data-name="Spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
            <div onClick={() => { window.open("mailto:iamshadankhan10@gmail.com", "_blank") }} className="icon mail" data-name="Mail"><img src="/doc-icons/mail.svg" alt="" /></div>
            <div onClick={() => { window.open("https://www.linkedin.com/in/shadankhan10", "_blank") }} className="icon link" data-name="LinkedIn"><img src="/doc-icons/link.svg" alt="" /></div>
            <div onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }} className="icon cli" data-name="Terminal"><img src="/doc-icons/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dock