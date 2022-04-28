import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SignalCellularAltSharpIcon from '@mui/icons-material/SignalCellularAltSharp';
import "./style.scss";
export default function Navbar() {
  return (
    <div className='container'>
        <div className='item'><HomeOutlinedIcon className='iconbutton'/></div>
        <div className='item'><SignalCellularAltSharpIcon className='iconbutton'/></div>
    </div>
  )
}
