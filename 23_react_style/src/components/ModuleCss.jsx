import style from '../styles/style.module.css';
import classNames from 'classnames';
import Names from 'classnames/bind';
function ModuleCss() {
  const setting = Names.bind(style);
  const value = 'first';
  const isTrue = true;

  return (
    <div className={style.container}>
      <h4>module.css import</h4>
      <div className={style.box2}>
        <div>안녕하세요</div>
      </div>
      <br />
      <div className={`${style.first} ${style.second}`}>클래스 여러 개 지정1 (백틱 사용)</div>
      <br />
      <div className={[style.first, style.second].join(' ')}>클래스 여러 개 지정2 (join 이용)</div>
      <br />
      <div className={classNames(style.first, style.second)}>
        classnames 메소드 이용 (install 필요)
      </div>
      <br />
      <div className={setting('first', 'second')}>classnames 모듈 사용 1</div>
      <br />
      <div className={setting('first', { second: false })}>classnames 모듈 사용 2-1</div>
      <br />
      <div className={setting(value, { second: isTrue })}>classnames 모듈 사용 2-2</div>
    </div>
  );
}

export default ModuleCss;
