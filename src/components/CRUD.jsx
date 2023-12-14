import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import { pathToRegexp } from 'path-to-regexp';
import NewPost from './NewPost'
import ListPosts from './ListPosts';
import BigPost from './BigPost';
import { getPost } from './API';
import EditPost from './EditPost';

export default function CRUD() {
  const [posts, usePosts] = useState();
  const [newPost, useNewPost] = useState();
  const [deletePost, useDeletePost] = useState()
  
  useEffect(() => {
    getPost(usePosts);
  },[newPost, deletePost])

  return (
    <div className='App'>
      <Router>
        <Link to='/new' className='link_create'>create</Link>
        <Routes>
          <Route path="/" element={<ListPosts posts={posts}></ListPosts>}></Route>
          <Route path="/new" element={<NewPost stateNewPost={useNewPost}></NewPost>}></Route>
          <Route path="/:id" element={<BigPost stateDeletePost={useDeletePost} posts={posts}></BigPost>}></Route>
          <Route path="/edit/:id" element={<EditPost posts={posts} stateEditPost={useNewPost}></EditPost>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
