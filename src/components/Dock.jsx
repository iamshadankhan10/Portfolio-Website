import React from 'react'
import "./dock.scss"

const Dock = ({ windowsState, setWindowsState }) => {
    return (
        <footer className='dock' >
            <div
                onClick={() => { setWindowsState(state => ({ ...state, github: true })) }}
                className="icon github" data-name="GitHub"><img src="/doc-icons/github.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, note: true })) }}
                className="icon note" data-name="Note"><img src="/doc-icons/note.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}
                className="icon pdf" data-name="Resume"><img src="/doc-icons/pdf.svg" alt="" /></div>
            <div
                onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
             className="icon calender" data-name="Calendar"><img src="/doc-icons/calendar.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }}
                className="icon spotify" data-name="Spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
            <div
            onClick={()=>{window.open("mailto:iamshadankhan10@gmail.com","_blank")}}
             className="icon mail" data-name="Mail"><img src="/doc-icons/mail.svg" alt="" /></div>
            <div
                onClick={() => { window.open("https://www.linkedin.com/in/shadankhan10", "_blank") }}
                className="icon link" data-name="LinkedIn"><img src="/doc-icons/link.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, cli: true })) }}
                className="icon cli" data-name="Terminal"><img src="/doc-icons/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dock