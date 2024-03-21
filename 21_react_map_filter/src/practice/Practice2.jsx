import { useState } from 'react';
import './Practice2.css';

export default function Practice2() {
  const [postList, setPostList] = useState([]);
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [searchScope, setSearchScope] = useState('writer');
  const [searchWord, setSearchWord] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const addPost = () => {
    // const newPost = postList.concat({
    //   pid: postList.length === 0 ? 1 : postList[postList.length - 1].pid + 1,
    //   title: title,
    //   writer: writer,
    // });
    // setPostList(newPost);
    let newPost = {
      writer: writer,
      title: title,
    };
    setPostList([...postList, newPost]);
    setWriter('');
    setTitle('');
  };

  const searchPost = () => {
    // console.log(searchScope);
    // console.log(searchWord);
    // if (searchScope === 'writer') {
    //   const result = postList.filter((post) => {
    //     console.log(post[searchWord]);
    //     console.log(post[searchScope]);
    //     console.log(post[searchScope].includes(searchWord));
    //   });
    // }
    let result = postList.filter((post) => {
      if (!post[searchScope].includes(searchWord)) {
        return null;
      }
      console.log(post);
      return post;
    });
    setSearchResult(result);
    setSearchWord('');
  };

  return (
    <div style={{ width: '600px' }}>
      <div className='inputDiv'>
        <label htmlFor='writer'>작성자: </label>
        <input
          type='text'
          id='writer'
          onChange={(e) => {
            setWriter(e.target.value);
          }}
          value={writer}
        />
        <label htmlFor='title'>제목: </label>
        <input
          type='text'
          id='title'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <button onClick={addPost}>작성</button>
      </div>
      <div className='searchDiv'>
        <select
          name='searchScope'
          onChange={(e) => {
            setSearchScope(e.target.value);
          }}
        >
          <option value='writer'>작성자</option>
          <option value='title'>제목</option>
        </select>
        <input
          type='text'
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
          value={searchWord}
        />
        <button onClick={searchPost}>검색</button>
      </div>
      <div className='tableDiv'>
        <table>
          <thead>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </thead>
          <tbody>
            {postList.map((post, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{post.title}</td>
                  <td>{post.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='searchResultDiv'>
        {searchResult.length === 0 ? (
          <h4>검색 결과가 없습니다.</h4>
        ) : (
          <table>
            <thead>
              <th>번호</th>
              <th>제목</th>
              <th>내용</th>
            </thead>
            <tbody>
              {searchResult.map((post, idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{post.title}</td>
                    <td>{post.writer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
