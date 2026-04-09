import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'

const Nav = ({ setWindowsState, activeWindow, isScrolling }) => {
    return (
        <nav className={isScrolling ? 'scrolling' : ''}>
            <div className="left">
                <div className="apple-icon">
                    <img src="./navbar-icons/apple.svg" alt="" />
                </div>
                <div className="nav-item">
                    <p><b>Finder</b></p>
                </div>
                {activeWindow && (
                    <div className="nav-item active-window">
                        <p>{activeWindow}</p>
                    </div>
                )}
                <div className="nav-item">
                    <p>File</p>
                </div>
                <div className="nav-item">
                    <p>View</p>
                </div>
                <div className="nav-item">
                    <p>Go</p>
                </div>
                <div className="nav-item">
                    <p>Window</p>
                </div>
                <div className="nav-item">
                    <p>Help</p>
                </div>
                
            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="/navbar-icons/wifi.svg" alt="" />
                </div>
                <div className="nav-icon">
                    <img src="/navbar-icons/battery.svg" alt="" />
                </div>
                <div className="nav-item">
                    <DateTime />
                </div>
            </div>
        </nav>
    )
}

export default Nav