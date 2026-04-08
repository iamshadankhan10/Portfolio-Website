import React, { useState, useRef } from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children, width = "40vw", height = "40vh", windowName, setWindowsState }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const rndRef = useRef(null);

    const handleMaximize = () => {
        if (!isMaximized) {
            rndRef.current.updatePosition({ x: 0, y: 0 });
            rndRef.current.updateSize({ width: "100vw", height: "100vh" });
        } else {
            rndRef.current.updatePosition({ x: 300, y: 200 });
            rndRef.current.updateSize({ width: width, height: height });
        }
        setIsMaximized(prev => !prev);
    };

    return (
        <Rnd
            ref={rndRef}
            dragHandleClassName="nav"
            default={{
                width: width,
                height: height,
                x: 300,
                y: 200
            }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red">
                            <span className="cross">×</span>
                        </div>
                        <div className="dot yellow">
                            <span className="minus">−</span>
                        </div>
                        <div onClick={handleMaximize} className="dot green">
                            <span className="expand">⤢</span>
                        </div>
                    </div>

                    <div className="title"><p>shadanrazakhan - zsh</p></div>

                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    );
}

export default MacWindow;