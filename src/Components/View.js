import React, {Component} from 'react'

const styles = {
  'fontSize': '80px',
  'textAlign': 'center',
  'marginTop': '150px',
  'fontWeight': '200'
}

const View = ({interest})=>{
 return (
    <div>
      <p style={styles}> {interest} </p>
    </div>
 )
}

export default View;
