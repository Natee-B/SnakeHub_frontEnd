import React from 'react'
import { useLocation } from 'react-router-dom'

export default function BlogDetail() {
  const location = useLocation()
  let el = location.state.el;

  return (
    <div>
        <div>{el.id}</div>
      <div dangerouslySetInnerHTML={{ __html: `${el.title}` }} />
      <div dangerouslySetInnerHTML={{ __html: `${el.content}` }} />
      
    </div>
  )
}
