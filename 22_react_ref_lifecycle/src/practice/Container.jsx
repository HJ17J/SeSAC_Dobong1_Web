import './styles/Post.css';

export default function Container({ children }) {
  return (
    <>
      <header>📜 Post List</header>
      <main>{children}</main>
      <footer>ⓒ2024. all rights reserved...</footer>
    </>
  );
}
