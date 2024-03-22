import { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

export default function PostList() {
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
      {postList.length === 0 ? (
        <h2 className='loading'>Loading...⏳</h2>
      ) : (
        postList?.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })
      )}
    </div>
  );
}
