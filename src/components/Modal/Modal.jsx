import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { FormComment } from './FormComment/FormComment';
import { Comments } from './Comments/Comments';

import { useCommentsData } from '../../hooks/useCommentsData';

import { ReactComponent as CloseIcon } from './img/close.svg';

import style from './Modal.module.css';

export const Modal = ({ id, closeModal }) => {
  const overlayRef = useRef(null);

  const [openCommentForm, setOpenCommentForm] = useState(false);

  const [[post, comments]] = useCommentsData(id);

  const handleClick = (e) => {
    if (e.target === overlayRef.current || e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {post ? (
          <>
            <h2 className={style.title}>{post.title}</h2>

            <div className={style.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}
              >
                {post.markdown}
              </Markdown>
            </div>

            <p className={style.author}>{post.author}</p>

            {openCommentForm ? (
              <FormComment />
            ) : (
              <button className={style.btn} onClick={() => setOpenCommentForm(true)}>
                Написать комментарий
              </button>
            )}

            <Comments comments={comments} />

            <button className={style.close} onClick={closeModal}>
              <CloseIcon />
            </button>
          </>
        ) : (
          <span>Загрузка...</span>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
