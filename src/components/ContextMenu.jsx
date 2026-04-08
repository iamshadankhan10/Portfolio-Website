import React from 'react'
import './contextmenu.scss'

const ContextMenu = ({ x, y, wallpapers, currentWallpaper, onSelect, onClose }) => {
    return (
        <div
            className="context-menu"
            style={{ top: y, left: x }}
            onClick={(e) => e.stopPropagation()}
        >
            <p className="context-title">Change Wallpaper</p>
            <div className="wallpaper-grid">
                {wallpapers.map((w, i) => (
                    <div
                        key={i}
                        className={`wallpaper-thumb ${currentWallpaper === w ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${w})` }}
                        onClick={() => onSelect(w)}
                    />
                ))}
            </div>
            <div className="context-divider" />
            <p className="context-item" onClick={onClose}>Close Menu</p>
        </div>
    )
}

export default ContextMenu