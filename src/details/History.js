import React from 'react'
import "./Style.css"
const History = (props) => {
    
  return (
    <div>
         <button className="goback" onClick={props.goBack}>
          Go Back
        </button><br/><br/><br/>
      <table border="2px" className='historytable'>
        <tr>
          <th>Total Months</th>
          <th>EMI per month</th>
        </tr>
        {props.emitable.map((items, index) => (
          <tr >
            <td>Month {index + 1}</td>
            <td> {items}</td>
            {console.log(items)}
          </tr>
        ))}
      </table>

    </div>
  )
}

export default History
