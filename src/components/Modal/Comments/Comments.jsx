import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

import { formatDate } from '../../../utils/formatDate';

import style from './Comments.module.css';

export const Comments = ({ comments }) => (
  <ul className={style.list}>
    {comments.length > 0 ? (
      comments.map((comment) => {
        if (
          comment.created &&
          comment.id &&
          comment.author &&
          comment.author !== '[deleted]' &&
          comment.body &&
          comment.body !== '[removed]'
        ) {
          return (
            <li key={comment.id} className={style.item}>
              <h3 className={style.author}>{comment.author}</h3>
              <Markdown
                className={style.comment}
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
                {comment.body}
              </Markdown>
              <time className={style.date} dateTime={comment.created}>
                {formatDate(comment.created)}
              </time>
            </li>
          );
        }
      })
    ) : (
      <span>Комментариев нет!</span>
    )}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
