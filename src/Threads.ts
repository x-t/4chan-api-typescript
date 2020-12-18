/**
 * The `threads.json` file is a comprehensive list of all threads that contains:
 * - The thread OP number
 * - The index page the thread is currently on
 * - A UNIX timestamp marking the last time the thread was modified
 * - The number of replies a thread has
 */
export type Threads = Array<ThreadsPage>;

export interface ThreadsPage {
  /**
   * The page number that the following `threads` array is on
   */
  page: number;

  /**
   * The array of thread objects
   */
  threads: Array<ThreadsPageThread>;
}

export interface ThreadsPageThread {
  /**
   * The OP ID of a thread
   */
  no: number;

  /**
   * The UNIX timestamp marking the last time the thread 
   * was modified (post added/modified/deleted, thread closed/sticky
   * settings modified)
   */
  last_modified: number;

  /**
   * A numeric count of the number of replies in the thread
   */
  replies: number;
}