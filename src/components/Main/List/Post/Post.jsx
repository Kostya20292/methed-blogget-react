import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { formatDate } from '../../../../utils/formatDate';

import { ReactComponent as DeleteIcon } from './img/delete.svg';
import notphoto from './img/notphoto.jpg';

import style from './Post.module.css';

export const Post = ({ postData }) => {
  const { title, author, ups, created, thumbnail, id } = postData;
  const { page } = useParams();

  const img = thumbnail.replace(/\?.*$/, '');

  return (
    <li className={style.post}>
      <img className={style.img} src={img !== 'self' ? img : notphoto} alt={title} />

      <div className={style.content}>
        <h2 className={style.title}>
          <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
            {title}
          </Link>
        </h2>
        <span className={style.linkAuthor}>{author}</span>
      </div>

      <button className={style.delete}>
        <DeleteIcon width={24} height={24} />
      </button>

      <div className={style.rating}>
        <button className={style.up} aria-label="Увеличить рейтинг" />
        <p className={style.ups}>{ups}</p>
        <button className={style.down} aria-label="Уменьшить рейтинг" />
      </div>

      <time className={style.date} dateTime={created}>
        {formatDate(created)}
      </time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
