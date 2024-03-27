export default function PhotoPage({ photos }) {
  //   {
  //     albumId: 1;
  //     id: 1;
  //     thumbnailUrl: 'https://via.placeholder.com/150/92c952';
  //     title: 'accusamus beatae ad facilis cum similique qui sunt';
  //     url: 'https://via.placeholder.com/600/92c952';
  //   }
  return (
    <main className='photoPage'>
      <p className='pageTitle'>상품 목록 이미지</p>
      {photos.map((photo) => {
        return (
          <ul key={photo.id}>
            <li>{photo.title}</li>
            {/* <img src={photo.thumbnailUrl} /> */}
            <img src={photo.url} />
          </ul>
        );
      })}
    </main>
  );
}
