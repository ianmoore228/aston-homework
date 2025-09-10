import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posts as mockPosts } from "@/shared/mocks/posts";

export function usePosts() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [allPosts] = useState(mockPosts);
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);

  // имитация загрузки
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);


  useEffect(() => {
    if (id) {
      setFilteredPosts(allPosts.filter((p) => p.userId === Number(id)));
    } else {
      setFilteredPosts(allPosts);
    }
  }, [id]);


  const posts = filteredPosts;

  return {
    posts,
    isLoading,
    setFilteredPosts, 
  };
}
