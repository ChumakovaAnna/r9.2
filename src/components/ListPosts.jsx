import React from 'react'
import { Link } from 'react-router-dom'
import SmallPost from './SmallPost'

export default function ListPosts({posts}) {
  return (
    <div className='listPosts'>
      <ul>
        {posts ? posts.map(item => (
          <li key={item.id}>
            <Link to={`/${item.id}`}>
              <SmallPost key={item.id} info={item}></SmallPost>
            </Link>
          </li>
        )) : null}

      </ul>
    </div>
  )
}
