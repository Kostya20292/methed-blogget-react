import { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { authContext } from '../../../context/authContext';

import style from './FormComments.module.css';

export const FormComment = () => {
  const { auth } = useContext(authContext);
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(textareaRef.current.value);
  };

  return (
    <form className={style.form}>
      <h3>{auth.name}</h3>
      <textarea className={style.textarea} ref={textareaRef}></textarea>
      <button onClick={handleClick} className={style.btn}>
        Отправить
      </button>
    </form>
  );
};

FormComment.propTypes = {
  textareaRef: PropTypes.ref,
};
