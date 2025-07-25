import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequestAsync } from '../store/post/postActions';

export const usePostData = (id) => {
  const token = useSelector((state) => state.tokenReducer.token);
  const post = useSelector((state) => state.postReducer.post);
  const comments = useSelector((state) => state.postReducer.comments);
  const status = useSelector((state) => state.postReducer.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    dispatch(postRequestAsync(id));
  }, [token]);

  return [post, comments, status];
};
