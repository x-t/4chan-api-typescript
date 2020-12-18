/**
 * The `boards.json` file is a comprehensive list of all 
 * boards and their major settings. The `boards.json` file 
 * also contains a list of all meme flags available on 
 * boards where `troll_flags` is enabled.
 */
export interface Boards {
  boards: Array<Board>;
  troll_flags: { [key: string]: string }
}

export interface Board {
  /**
   * The directory the board is located in.
   */
  board: string;

  /**
   * The readable title at the top of the board.
   */
  title: string;

  /**
   * Is the board [worksafe](https://4chan.org/faq#worksafe)
   */
  ws_board: 0 | 1;

  /**
   * How many threads are on a single index page
   */
  per_page: number;

  /**
   * How many index pages does the board have
   */
  pages: number;

  /**
   * Maximum file size allowed for non `.webm` attachments (in KB)
   */
  max_filesize: number;

  /**
   * Maximum file size allowed for `.webm` attachments (in KB)
   */
  max_webm_filesize: number;

  /**
   * Maximum number of characters allowed in a post comment
   */
  max_comment_chars: number;

  /**
   * Maximum duration of a `.webm` attachment (in seconds)
   */
  max_webm_duration: number;

  /**
   * Maximum number of replies allowed to a thread
   * before the thread stops [bumping](https://4chan.org/faq#bump)
   */
  bump_limit: number;

  /**
   * Maximum number of image replies per thread before image replies are discarded
   */
  image_limit: number;

  /**
   * Board cooldowns
   */
  cooldowns: Cooldowns;

  /**
   * SEO [meta description content](https://moz.com/learn/seo/meta-description) for a board
   */
  meta_description: string;


  /**
   * Are [spoilers](https://4chan.org/faq#spoiler) enabled
   */
  spoilers?: 0 | 1;

  /**
   * How many custom spoilers does the board have
   */
  custom_spoilers?: number;

  /**
   * Are [archives](https://4chan.org/faq#archive) enabled for the board
   */
  is_archived?: 0 | 1;

  /**
   * Are troll flags enabled on the board
   */
  troll_flags?: 0 | 1;

  /**
   * Are flags showing the poster's country enabled on the board
   */
  country_flags?: 0 | 1;

  /**
   * Are poster ID tags enabled on the board
   */
  user_ids?: 0 | 1;

  /**
   * Can users submit drawings via browser the Oekaki app
   */
  oekaki?: 0 | 1;

  /**
   * Can users submit [sjis](https://en.wikipedia.org/wiki/Shift_JIS)
   * drawings using the `[sjis]` tags
   */
  sjis_tags: 0 | 1;

  /**
   * Board supports code syntax highlighting using the `[code]` tags
   */
  code_tags?: 0 | 1;

  /**
   * Board supports `[math]` [TeX](https://en.wikipedia.org/wiki/TeX) 
   * and `[eqn]` tags
   */
  math_tags?: 0 | 1;

  /**
   * Is image posting disabled for the board
   */
  text_only?: 0 | 1;

  /**
   * Is the name field disabled on the board
   */
  forced_anon?: 0 | 1;

  /**
   * Are webms with audio allowed?
   */
  webm_audio?: 0 | 1;

  /**
   * Do OPs require a subject
   */
  require_subject?: 0 | 1;

  /**
   * What is the minimum image width (in pixels)
   */
  min_image_width?: number;

  /**
   * What is the minimum image height (in pixels)
   */
  min_image_height?: number;
}

export interface Cooldowns {
  threads: number;
  replies: number;
  images: number;
}