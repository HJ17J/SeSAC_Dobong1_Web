import '../styles/SassComponent.scss';
import pooh from '../assets/winniethepooh.gif';

export default function Sass() {
  return (
    <>
      <h2>Sass 사용</h2>
      <div className='div1'>
        <div className='div2'>
          <div className='div3'></div>
        </div>
        {/* button.btn{BUTTON$}*3 */}
        <button className='btn orangered'>BTN1</button>
        <button className='btn btn--opacity'>BTN2</button>
        <button className='btn btn--blue'>BTN3</button>
      </div>
      {/* mixin, for, if, each */}
      <div className='container'>
        <div className='box1'></div>
        <div className='box1'></div>
        <div className='box1'></div>
        <p className='circle'></p>
        <p className='circle'></p>
        <p className='circle'></p>
        <div className='box2'>hi1</div>
        <div className='box2'>hi2</div>
        <div className='box2'>hi3</div>
        <div className='box2'>hi4</div>
      </div>

      <h2>이미지 가지고 오기</h2>
      <h4>1. src 폴더 내부에 이미지 저장</h4>
      <h5>상대경로로 불러오기</h5>
      <img
        src='../assets/winniethepooh.gif'
        alt='src 내부에 이미지가 있을 땐 경로명으로 접근할 수 없습니다.'
      />
      <h5>import해서 불러오기</h5>
      <img src={pooh} alt='import 후 가지고 오기' />
      <h5>css 파일에서 이미지 접근 (background-image)</h5>
      <div className='img-test src-img'></div>

      <h4>2. public 폴더에 이미지 저장</h4>
      <h5>img 태그 사용하기</h5>
      <img
        className='sass-img'
        src='/assets/ApproachingTheMoon_690313.jpg'
        alt='경로명으로 접근 가능, public 폴더는 static이기 때문에 /로 접근'
      />
      <img
        className='sass-img'
        src={process.env.PUBLIC_URL + '/assets/ApproachingTheMoon_690313.jpg'}
        alt='경로명으로 접근 가능, public 폴더는 static이기 때문에 /로 접근'
      />
      <h5>css 파일에서 이미지 접근 (background-image)</h5>
      <div className='img-test public-img sass-img'></div>
    </>
  );
}
