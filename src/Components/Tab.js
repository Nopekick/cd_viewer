import React, {Component} from 'react'
import './Tab.css'

const Tab = ({edit, view, tab})=>{
 return (
   <div id="main">
        {tab==='EDIT' ? <div onClick={edit} style={{'borderBottom': '2px solid black'}} className='tab'> Edit</div> : <div onClick={edit} className='tab'> Edit</div> }
        {tab==='VIEW' ? <div onClick={view} style={{'borderBottom': '2px solid black'}} className='tab'> View</div> : <div onClick={view} className='tab'> View</div> }
   </div>
 )
}

export default Tab;
