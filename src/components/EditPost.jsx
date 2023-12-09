import React, {useEffect, useState} from 'react'
import img from '../images/avatar.jpg'
import { Link, useParams } from 'react-router-dom';
import { putEditPost } from './API';

export default function EditPost({posts, stateEditPost}) {
  const [form, setForm] = useState();
  
  const params = useParams()
  const itemArr = posts.filter(i => i.id == params.id)
  const item = itemArr[0]
  console.log(item.id)
  
  const handleChange = ({target}) => {
    if(target.value) {
      setForm(target.value);
    }
  }
  
  const handleClick = () => {
    if (form) {
      const newPost = {
        id: item.id,
        content: `${form}`
      }
      putEditPost(item.id, newPost)
      stateEditPost(newPost);
      setForm('')
    } else {
      console.log("поле не должно быть пустым")
    }
  }

  useEffect(()=> {
    setForm(item.content)
  },[])

  return (
    <div className='newPost'>
    <Link to='/' className='link_close'>X</Link>
    <div className='bigPost_content'>
      <img src={img} alt='avatar' className='avatar'></img>
      <form className='form'>
        <textarea className='textarea' value={form} onChange={handleChange}></textarea>
        <Link to='/' className="button_publish" onClick={handleClick}>save</Link>
      </form>
    </div>
  </div>
  )
}
