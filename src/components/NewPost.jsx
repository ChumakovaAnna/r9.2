import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { postNewPost } from './API';


export default function NewPost({stateNewPost}) {
  const [form, setForm] = useState();

  const handleChange = ({target}) => {
    if(target.value) {
      setForm(target.value);
    }
  }

  const handleClick = () => {
    if (form) {
      const newPost = {
        id: 0,
        content: `${form}`
      }
      postNewPost(newPost)
      stateNewPost(newPost);
      setForm('')
    } else {
      console.log("поле не должно быть пустым")
    }
  }

  return (
    <div className='newPost'>
      <Link to='/' className='link_close'>X</Link>
      <form className='form'>
        <textarea className='textarea' value={form} onChange={handleChange}></textarea>
        <Link to='/' className="button_publish" onClick={handleClick}>publish</Link>
      </form>
    </div>
  )
}
