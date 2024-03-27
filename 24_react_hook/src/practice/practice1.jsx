import { useForm } from 'react-hook-form';

export default function Practice1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = () => {
    console.log(watch());
  };
  const onInvalid = () => {
    console.log(watch());
  };
  return (
    <>
      <h2>react hook form 실습</h2>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type='text'
          placeholder='이름'
          {...register('name', { required: '이름은 필수 항목입니다.' })}
        />
        <span style={{ margin: '0px 10px', color: 'red' }}>{errors.name?.message}</span>
        <br />
        <input
          type='text'
          placeholder='나이'
          {...register('age', {
            validate: {
              validAge: (value) => {
                return value >= 0 || '0 이상의 숫자만 입력 가능합니다.';
              },
            },
          })}
        />
        <span style={{ margin: '0px 10px', color: 'red' }}>{errors.age?.message}</span>
        <br />
        <button type='submit'>제출</button>
      </form>
    </>
  );
}
