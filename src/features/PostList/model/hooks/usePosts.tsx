import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/app/providers/store";
import { useGetAllPostsQuery } from "@/entities/post";
import { setFilteredPosts } from "@/entities/post";
import { setSelectedUserId } from "@/entities/user";
import type { Post } from "@/entities/post";
import { useParams } from "react-router-dom";

export function usePosts() {
  const dispatch = useDispatch<AppDispatch>();

  const { userId } = useParams();

  const selectedUserId = useSelector(
    (state: RootState) => state.users.selectedUserId
  );

  const { data, isFetching, error } = useGetAllPostsQuery();

  const filteredPosts = useSelector((state: RootState) => state.posts.filtered);

  useEffect(() => {
    if (userId && Number(userId) !== selectedUserId) {
      dispatch(setSelectedUserId(Number(userId)));
    }
  }, []);

  useEffect(() => {
    if (!data) return;

    const userId = selectedUserId || 1;
    if (userId) {
      dispatch(setFilteredPosts(data.filter((p) => p.userId === userId)));
    } else {
      dispatch(setFilteredPosts(data));
    }
  }, [data, selectedUserId, dispatch]);

  const onSelectUser = (id: number) => {
    dispatch(setSelectedUserId(id));
  };

  return {
    posts: filteredPosts,
    isFetching,
    error,
    setFilteredPosts: (posts: Post[]) =>
      dispatch(setFilteredPosts(posts)),
    onSelectUser,
    selectedUserId,
  };
}
