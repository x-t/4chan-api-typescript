import { Post } from "./Post";

/**
 * The `catalog.json` file is a comprehensive list 
 * of all threads+attributes on a board. Every thread is grouped by `page`.
 */
export type Catalog = Array<CatalogPage>;

export interface CatalogPage {
  page: number;
  threads: Array<Post>;
}