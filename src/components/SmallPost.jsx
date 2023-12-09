import React from 'react'

export default function SmallPost({info}) {
  return (
    <div className='smallPost'>
      <div>Author</div>
      <div className='postContent'>{info.content}</div>
    </div>
  )
}
