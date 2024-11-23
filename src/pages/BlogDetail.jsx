import React from 'react'
import { useLocation } from 'react-router-dom'

export default function BlogDetail() {
  const location = useLocation()
  let el = location.state.el;

  return (
    <div >
      <div class="transparent-bg">
      <div dangerouslySetInnerHTML={{ __html: `${el.title}` }} />
      <div dangerouslySetInnerHTML={{ __html: `${el.content}` }} />
      </div>
    </div>
  )
}
