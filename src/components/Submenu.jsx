import React from 'react'

const Submenu = () => {
  return (
    <div className="sub-menu-wrapper display-on">
      <ul className="menu-list">
        <li className="menu-item"><a href="/products/SteeringParts">Steering Parts</a></li>
        <li className="menu-item"><a href="/products/WaterPumps">Water Pumps</a></li>
        <li className="menu-item"><a href="/products/FuelPumps">Fuel Pumps</a></li>
        <li className="menu-item"><a href="/products/SteeringPumps">Steering Pumps</a></li>
        <li className="menu-item"><a href="/products/SuspensionParts">Suspension Parts</a></li>
        <li className="menu-item"><a href="/products/MetalRubberParts">Metal-Rubber Parts</a></li>
        <li className="menu-item"><a href="/products/BearingsWheelHub">Bearings and Wheel Hub</a></li>
        <li className="menu-item"><a href="/products/Sensors">Sensors</a></li>
        <li className="menu-item"><a href="/products/HeatingCoolingParts">Heating and Cooling Parts</a></li>
      </ul>
    </div>
  )
}

export default Submenu
