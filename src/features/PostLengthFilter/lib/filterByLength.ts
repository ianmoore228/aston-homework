import type { Post } from "@/entities/post";

export function filterByLength(posts: Post[], min: number, max: number): Post[] {
  return posts.filter(
    (post) => post.title.length >= min && post.title.length <= max
  );
}