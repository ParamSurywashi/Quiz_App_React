import React from 'react'

function LabelBox(props) {
  return (
    <>
    <div className='box'>
        <label className='lblText' id={props.id}>{props.num1}</label>
    </div>
    </> 
  )
}

export default LabelBox