import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Post.css';

export default function Practice5() {
  const [postList, setPostList] = useState([]);

  //   const getPosts = async () => {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setPostList(res.data);
  //   };

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
        setPostList(result.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className='postListDiv'>
      <h1 className='head'>📜Post List</h1>
      {postList.length === 0 ? (
        <h2 className='loading'>Loading...⏳</h2>
      ) : (
        postList?.map((post) => {
          return (
            <div className='postDiv'>
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
