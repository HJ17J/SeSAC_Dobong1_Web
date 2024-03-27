import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log('valid', data);
  };
  const onInvalid = (data) => {
    console.log('invalid', data);
    console.log(data.username?.message);
    console.log(data.email?.message);
  };
  console.log('ERROR!!!', errors);
  console.log('MESSAGE:::', errors.email?.message);
  console.log('watch username', watch('username'));
  console.log('watch all', watch());

  /* 
    단축 평가
        &&: 여러 조건 중에 하나라도 false라면 전체 false
        ||: 여러 조건 중에 하나라도 true라면 전체 true
     */
  //   console.log('단축평가:|| - ', false || 'hello');
  //   console.log('단축평가:|| - ', true || 'hello');
  //   console.log('단축평가:&& - ', false && 'hello');
  //   console.log('단축평가:&& - ', true && 'hello');

  //   const userNameRegister = register('username');
  // {name: 'username', onChange: ƒ, onBlur: ƒ, ref: ƒ}
  return (
    <>
      <h1>useForm 사용해보기</h1>
      {/* handleSubmit(func1[,func2]): 인자로 두 개의 함수를 받을 수 있음
            - func1: 폼이 유효할 때 실행
            - func2: 폼이 유효하지 않을 때 실행
       */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type='text'
          placeholder='username'
          {...register('username', {
            required: '이름을 입력해주세요.',
            minLength: { value: 2, message: '이름은 최소 두 글자 이상 작성해주세요.' },
          })}
        />
        &nbsp;&nbsp; {errors.username?.message}
        <br />
        <input
          type='email'
          placeholder='email'
          {...register('email', {
            required: '이메일을 입력해주세요.',
            validate: {
              useGmail: (value) => {
                return value.includes('@gmail.com') || 'gmail로만 가입 가능합니다.';
              },
            },
          })}
        />
        &nbsp;&nbsp; {errors.email?.message}
        <br />
        <input type='password' placeholder='password' {...register('password')} />
        <br />
        <button type='submit'>제출</button>
      </form>
    </>
  );
}
