import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';

import { Post } from './Post/Post';
import { Preloader } from '../../UI/Preloader/Preloader';

import { postsRequestAsync } from '../../../store/posts/postsActions';

import style from './List.module.css';

export const List = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const loading = useSelector((state) => state.postsReducer.loading);
  const error = useSelector((state) => state.postsReducer.error);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    if (!posts.length && !error) {
      dispatch(postsRequestAsync());

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !error) {
          dispatch(postsRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      }
    );

    observer.observe(endList.current);

    return () => {
      endList.current && observer.unobserve(endList.current);
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {loading && !posts.length && !error ? (
          <Preloader size={150} />
        ) : (
          <>
            {posts.map(({ data }) => (
              <Post key={data.id} postData={data} />
            ))}
            <li className={style.end} ref={endList} />
            {loading && !error && <Preloader size={150} />}
          </>
        )}

        {error && <span>Ошибка при загрузке постов!!!</span>}
      </ul>
      <Outlet />
    </>
  );
};
