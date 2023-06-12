import React from 'react'

interface IErrorProps {
  msg: string
}

const Error = ({ msg }: IErrorProps) => {
  return (
    <div className="error">
      <div className="error__msg">{msg}</div>
    </div>
  )
}

export default Error
