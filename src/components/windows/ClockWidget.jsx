import React, { useEffect, useRef } from 'react'
import { Rnd } from 'react-rnd'
import './clockwidget.scss'

const ClockWidget = () => {
    const secondRef = useRef(null)
    const minuteRef = useRef(null)
    const hourRef = useRef(null)

    useEffect(() => {
        const updateClock = () => {
            const now = new Date()
            const seconds = now.getSeconds()
            const minutes = now.getMinutes()
            const hours = now.getHours() % 12

            const secondDeg = seconds * 6
            const minuteDeg = minutes * 6 + seconds * 0.1
            const hourDeg = hours * 30 + minutes * 0.5

            if (secondRef.current) secondRef.current.style.transform = `rotate(${secondDeg}deg)`
            if (minuteRef.current) minuteRef.current.style.transform = `rotate(${minuteDeg}deg)`
            if (hourRef.current) hourRef.current.style.transform = `rotate(${hourDeg}deg)`
        }

        updateClock()
        const interval = setInterval(updateClock, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Rnd
            default={{ width: 180, height: 180, x: 80, y: 80 }}
            dragHandleClassName="clock-drag"
        >
            <div className="clock-widget">
                <div className="clock-drag">
                    <div className="clock-face">

                        {/* Hour markers */}
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className={`marker ${i % 3 === 0 ? 'major' : 'minor'}`}
                                style={{ transform: `rotate(${i * 30}deg)` }}
                            />
                        ))}

                        {/* Hands */}
                        <div className="hand hour" ref={hourRef} />
                        <div className="hand minute" ref={minuteRef} />
                        <div className="hand second" ref={secondRef} />

                        {/* Center dot */}
                        <div className="center-dot" />
                    </div>
                </div>
            </div>
        </Rnd>
    )
}

export default ClockWidget