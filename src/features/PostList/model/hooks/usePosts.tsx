import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posts as mockPosts } from "@/shared/mocks/posts";

export function usePosts() {
  const { userId } = useParams();
  const id = Number(userId);

  const [isLoading, setIsLoading] = useState(true);
  const [allPosts] = useState(mockPosts);
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (id) {
      setFilteredPosts(allPosts.filter((p) => p.userId === id));
    } else {
      setFilteredPosts(allPosts);
    }
  }, [id, allPosts]);

  return {
    posts: filteredPosts,
    isLoading,
    setFilteredPosts,
  };
}
