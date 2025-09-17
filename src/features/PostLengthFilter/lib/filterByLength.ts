import type { Post } from "@/entities/post";

export function filterByLength(posts: Post[], min: number, max: number, userId?: number): Post[] {
  let filteredPosts = posts;

  if (userId) {
    filteredPosts = filteredPosts.filter((post) => post.userId === userId);
  }

  filteredPosts = filteredPosts.filter(
    (post) => post.title.length >= min && post.title.length <= max
  );

  return filteredPosts;
}

