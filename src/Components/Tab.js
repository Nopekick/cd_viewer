import React, {Component} from 'react'
import './Tab.css'

const Tab = ({edit, view, style})=>{
 return (
   <div id="main">
        <div onClick={edit} className='tab'> Edit</div>
        <div onClick={view} className='tab'> View</div>
   </div>
 )
}

export default Tab;
