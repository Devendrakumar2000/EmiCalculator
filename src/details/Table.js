import React from 'react'

const Table = (props) => {
  return (
    <div>
         <button className="goback" onClick={props.goBack}>
          Go Back
        </button>
      <table border="2px">
        <tr>
          <th>Total Months</th>
          <th>EMI per month</th>
        </tr>
        {props.emitable.map((items, index) => (
          <tr >
            <td>Month {index + 1}</td>
            <td> {items.month}</td>
          </tr>
        ))}
      </table>

    </div>
  )
}

export default Table
