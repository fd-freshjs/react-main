import React from 'react'

function StepControl(props) {
  return (
    <div>
        <input type="number" value={props.value} onChange={props.onChange} />
    </div>
  )
}

export default StepControl;
