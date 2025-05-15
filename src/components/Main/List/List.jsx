import { Post } from './Post/Post';

import style from './List.module.css';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Author',
    ups: 24,
    date: '2022-02-23T09:45:00.000Z',
  };

  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
