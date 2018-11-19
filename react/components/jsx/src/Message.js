import React from 'react'

export default function Message(props) {
  return (
    <div className = "ui message">
        <div className="header">
            {props.header}에게 알림
        </div>  
        <p>
            알립니다~
        </p>
    </div>
  )
}
