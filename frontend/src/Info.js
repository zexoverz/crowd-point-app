import React from 'react'

function Info({point}) {
  return (
    <div style={{textAlign: 'center'}}>
        <h3 style={{margin: 0}}>information</h3>
        <h5 style={{margin: 10}}>{point.time}</h5>
        <table style={{fontSize: '10px', textAlign: 'center'}}>
        <tr>
            <th>longitude</th>
            <th>latitude</th>
            <th>brand</th>
            <th>user_count</th>
        </tr>
        <tr>
            <td>{point.longitude}</td>
            <td>{point.latitude}</td>
            <td>{point.brand}</td>
            <td>{point.user_count}</td>
        </tr>
        </table>
    </div>
  )
}

export default Info