import React, { useState } from 'react'
import './toggle.css'

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
    return (
        <div>
           <label className="switch">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider"></span>
    </label>
        </div>
    )
}

export default Toggle
