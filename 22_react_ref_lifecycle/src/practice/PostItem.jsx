export default function PostItem({ post }) {
  return (
    <div className='postDiv'>
      <p className='title'>
        <span>No. {post.id}</span> - <span>{post.title}</span>
      </p>
      <p className='body'>{post.body}</p>
    </div>
  );
}
