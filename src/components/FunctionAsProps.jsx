import React from 'react'

const FunctionAsProps = ({funcAsProps}) => {
  return (
    <div>
      <h2>Function As A props example</h2>
      <button onClick={funcAsProps}>Call FUnction</button>
    </div>
  )
}

export default FunctionAsProps
