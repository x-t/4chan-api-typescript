import { Post } from "./Post";

/**
 * `/[board]/[1-15].json` files are a representation of a single index page,
 * which includes each thread on that specific page and the preview replies.
 */
export interface Page {
  threads: Array<{ posts: Array<Post> }>;
}