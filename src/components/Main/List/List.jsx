import { Post } from './Post/Post';

import style from './List.module.css';

export const List = () => {
  const postsData = [
    {
      id: 1,
      thumbnail: '',
      title: 'Title1',
      author: 'Author1',
      ups: 24,
      date: '2022-02-23T09:45:00.000Z',
    },
    {
      id: 2,
      thumbnail: '',
      title: 'Title2',
      author: 'Author2',
      ups: 24,
      date: '2022-02-23T09:45:00.000Z',
    },
    {
      id: 3,
      thumbnail: '',
      title: 'Title3',
      author: 'Author3',
      ups: 24,
      date: '2022-02-23T09:45:00.000Z',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((data) => (
        <Post key={data.id} postData={data} />
      ))}
    </ul>
  );
};
