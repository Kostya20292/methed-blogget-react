import { Post } from './Post/Post';
import { Preloader } from '../../UI/Preloader/Preloader';

import { usePosts } from '../../../hooks/usePosts';

import style from './List.module.css';

export const List = () => {
  const [posts, status] = usePosts();

  return (
    <ul className={style.list}>
      {status === 'loading' && <Preloader size={150} />}

      {status === 'success' && posts.map(({ data }) => <Post key={data.id} postData={data} />)}

      {status === 'error' && <span>Ошибка при загрузке постов!!!</span>}
    </ul>
  );
};
