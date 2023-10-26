import React from 'react'

const List = (props) => {
   const {list}=props;
  return (
    <div>
        <h3>List of Names</h3>
      <table>
        <ul>
            {
                list.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
      </table>
    </div>
  )
}

export default List
