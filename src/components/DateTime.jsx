import React, { useEffect, useState } from 'react'

const formatDateTime = (date) => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }) // e.g. "Wed"
  const day = date.getDate() // numeric day, e.g. 1
  const month = date.toLocaleDateString('en-US', { month: 'short' }) // e.g. "Apr"
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }) // e.g. "9:55 PM"

  return `${weekday} ${day} ${month} ${time}`
}

const DateTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    // Align updates to the start of each minute for accurate minute display
    const tick = () => setNow(new Date())

    // Update immediately then schedule the next update at the next minute boundary
    tick()

    const ms = now.getMilliseconds()
    const sec = now.getSeconds()
    const delay = (60 - sec) * 1000 - ms

    const timeoutId = setTimeout(() => {
      tick()
      const intervalId = setInterval(tick, 60 * 1000)

      // Store interval id on window so cleanup below can access it via closure
      // (we'll clear it in the outer cleanup)
      ;(window.__dateTimeInterval__ = intervalId)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      if (window.__dateTimeInterval__) {
        clearInterval(window.__dateTimeInterval__)
        window.__dateTimeInterval__ = null
      }
    }
    // We intentionally only want to read the initial now to compute alignment.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{formatDateTime(now)}</div>
}

export default DateTime