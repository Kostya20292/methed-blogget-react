import { useDispatch, useSelector } from 'react-redux';

import { updateComment } from '../../../store/comments/commentsActions';

import { useAuth } from '../../../hooks/useAuth';

import style from './FormComments.module.css';

export const FormComment = () => {
  const [auth] = useAuth();
  const value = useSelector((state) => state.commentReducer.comment);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form}>
      <h3>{auth.name}</h3>
      <textarea className={style.textarea} value={value} onChange={handleChange}></textarea>
      <button onClick={handleClick} className={style.btn}>
        Отправить
      </button>
    </form>
  );
};
