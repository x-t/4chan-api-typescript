import { Post } from "./Post";

/**
 * `/[board]/thread/[op ID].json` files are a representation
 *  of a single OP and all the replies, which form a thread.
 */
export interface Thread {
  posts: Array<Post>;
}