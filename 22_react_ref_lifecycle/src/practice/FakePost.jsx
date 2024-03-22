import { useEffect, useState } from 'react';
import './styles/Post.css';

export default function Post({ posts }) {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setPostList(posts);
    }, 2000);
  }, []);
  return (
    <div className='postListDiv'>
      <h1 className='head'>📜Post List</h1>
      {postList.length === 0 ? (
        <h2 className='loading'>Loading...⏳</h2>
      ) : (
        postList?.map((post) => {
          return (
            <div key={post.id} className='postDiv'>
              <p className='title'>
                <span>No. {post.id}</span> - <span>{post.title}</span>
              </p>
              <p className='body'>{post.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
