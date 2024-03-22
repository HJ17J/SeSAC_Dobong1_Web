import { useState, useRef } from 'react';
import './styles/Practice1.css';

export default function Practice1() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [postList, setPostList] = useState([]);

  const [searchTarget, setSearchTarget] = useState('writer');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchList, setSearchList] = useState([]);

  const writerRef = useRef();
  const titleRef = useRef();
  const formRef = useRef();

  const addPost = () => {
    if (!writer.trim()) {
      writerRef.current.focus();
      return;
    } else if (!title.trim()) {
      titleRef.current.focus();
      return;
    }

    const newPost = {
      id: postList.length === 0 ? 1 : postList[postList.length - 1].id + 1,
      title: title,
      writer: writer,
    };
    setPostList([...postList, newPost]);
    formRef.current.reset();
  };

  const deletePost = (id) => {
    const list = postList.filter((post) => !post.id === id);
    setPostList(list);
  };

  const search = () => {
    const result = postList.filter((post) => {
      return post[searchTarget].includes(searchKeyword);
    });
    setSearchList(result);
  };

  return (
    <>
      <form className='inputForm' ref={formRef}>
        <label htmlFor='writer'>작성자:</label>
        <input
          type='text'
          id='writer'
          ref={writerRef}
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        />
        <label htmlFor='title'>제목:</label>
        <input
          type='text'
          id='title'
          ref={titleRef}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type='button' onClick={addPost}>
          작성
        </button>
      </form>
      <br />
      <div className='listDiv'>
        <form className='searchForm'>
          <select name='searchTarget' onChange={(e) => setSearchTarget(e.target.value)}>
            <option value='writer'>작성자</option>
            <option value='title'>제목</option>
          </select>
          <input
            type='text'
            placeholder='검색할 단어를 입력하세요'
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button type='button' onClick={search}>
            검색
          </button>
        </form>
        <h4>목록</h4>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {postList?.map((post) => {
              return (
                <tr key={post.id} onDoubleClick={() => deletePost(post.id)}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='searchDiv'>
        <h4>검색 결과</h4>
        {searchList.length === 0 ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            {searchList?.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.writer}</td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
}
