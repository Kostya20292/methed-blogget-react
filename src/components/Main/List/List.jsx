import { Post } from './Post/Post';

import style from './List.module.css';
import { useContext } from 'react';
import { postsContext } from '../../../context/postsContext';

export const List = () => {
  const { posts } = useContext(postsContext);

  if (posts) {
    return (
      <ul className={style.list}>
        {posts.map(({ data }) => (
          <Post key={data.id} postData={data} />
        ))}
      </ul>
    );
  } else {
    return <span>Постов нет!!!</span>;
  }
};
