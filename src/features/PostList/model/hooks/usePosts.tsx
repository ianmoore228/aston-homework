import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/app/providers/store";
import { useGetAllPostsQuery } from "@/entities/post";
import { setFilteredPosts, selectFilteredPosts } from "@/entities/post";
import { setSelectedUserId } from "@/entities/user";
import type { Post } from "@/entities/post";
import { useParams, useLocation } from "react-router-dom";

export function usePosts() {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { userId } = useParams();

  const selectedUserId = useSelector(
    (state: RootState) => state.users.selectedUserId
  );

  const { data, isFetching, error } = useGetAllPostsQuery();
  const filteredPosts =  useSelector(selectFilteredPosts);

  const showAllPosts = pathname === "/";

  useEffect(() => {
    if (!showAllPosts && userId) {
      dispatch(setSelectedUserId(Number(userId)));
    }
  }, [userId, showAllPosts, dispatch]);

  useEffect(() => {
    if (!data) return;

    if (showAllPosts || selectedUserId == null) {
      dispatch(setFilteredPosts(data)); 
    } else {
      dispatch(setFilteredPosts(data.filter((p) => p.userId === selectedUserId)));
    }
  }, [data, selectedUserId, showAllPosts, dispatch]);

  const onSelectUser = (id: number ) => {
    dispatch(setSelectedUserId(id));
  };

  return {
    posts: filteredPosts,
    isFetching,
    error,
    setFilteredPosts: (posts: Post[]) => dispatch(setFilteredPosts(posts)),
    onSelectUser,
    selectedUserId,
  };
}
