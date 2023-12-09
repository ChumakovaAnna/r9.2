import React, { useEffect } from 'react'
import img from '../images/avatar.jpg'
import { Link, useParams } from 'react-router-dom';
import { deletePost } from './API';

export default function BigPost({posts, stateDeletePost}) {
  const params = useParams();
  const itemArr = posts.filter(i => i.id == params.id)
  const item = itemArr[0]
  const path = `/edit/${params.id}`

  const handleClick = () => {
    deletePost(params.id)
    stateDeletePost(item)
  }

  useEffect(()=> {
    // console.log(params.id)
  }, [params.id])

  return (
    <div className='bigPost'>
      <Link to='/' className='link_close'>X</Link>
      <div className='bigPost_content'>
        <img src={img} alt='avatar' className='avatar'></img>
        <div>Author</div>
        <div className='postContent'>{item.content}</div>
      </div>
      <Link to='/' className='link_close' onClick={handleClick}>delete</Link>
      <Link to={path} className='link_close'>edit</Link>
  </div>
  )
}
