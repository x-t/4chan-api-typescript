export interface Post {
  /**
   * The numeric post ID
   */
  no: number;

  /**
   * For replies: this is the ID of the thread being replied to. 
   * For OP: this value is zero
   */
  resto: number;

  /**
   * MM/DD/YY(Day)HH:MM (:SS on some boards), EST/EDT timezone
   */
  now: string;

  /**
   * UNIX timestamp the post was created
   */
  time: number;

  /**
   * Name user posted with. Defaults to `Anonymous`
   */
  name: string;


  /**
   * If the thread is being pinned to the top of the page
   */
  sticky?: 1;

  /**
   * If the thread is closed to replies
   */
  closed?: 1;

  /**
   * The user's tripcode, in format: `!tripcode` or `!!securetripcode`
   */
  trip?: string;

  /**
   * The poster's ID
   */
  id?: string;

  /**
   * The capcode identifier for a post
   */
  capcode?: "mod" | "admin" | "admin_highlight" | "manager" | "developer" | "founder";

  /**
   * Poster's 
   * [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   */
  country?: string;

  /**
   * Poster's country name
   */
  country_name?: string;

  /**
   * OP Subject text
   */
  sub?: string;

  /**
   * Comment (HTML escaped)
   */
  com?: string;

  /**
   * Unix timestamp + microtime that an image was uploaded
   */
  tim?: string;

  /**
   * Filename as it appeared on the poster's device
   */
  filename?: string;

  /**
   * Filetype
   */
  ext?: string;

  /**
   * Size of uploaded file in bytes
   */
  fsize?: number;

  /**
   * 24 character, packed base64 MD5 hash of file
   */
  md5?: string;

  /**
   * Image width dimension
   */
  w?: number;

  /**
   * Image height dimension
   */
  h?: number;

  /**
   * Thumbnail image width dimension
   */
  tn_w?: number;

  /**
   * Thumbnail image height dimension
   */
  tn_h?: number;

  /**
   * If the file was deleted from the post
   */
  filedeleted?: 1;

  /**
   * If the image was spoilered or not
   */
  spoiler?: number;

  /**
   * The custom spoiler ID for a spoilered image
   */
  custom_spoiler?: number;

  /**
   * Number of replies minus the number of previewed replies
   */
  ommitted_posts?: number;

  /**
   * Number of image replies minus the number of previewed image replies
   */
  ommitted_images?: number;

  /**
   * Total number of replies to a thread
   */
  replies?: number;

  /**
   * Total number of image replies to a thread
   */
  images?: number;

  /**
   * If a thread has reached bumplimit, it will no longer bump
   */
  bumplimit?: 1;

  /**
   * If an image has reached image limit, no more image replies can be made
   */
  imagelimit?: 1;

  /**
   * The UNIX timestamp marking the last time the thread was modified 
   * (post added/modified/deleted, thread closed/sticky settings modified)
   */
  last_modified?: number;

  /**
   * The category of `.swf` upload
   */
  tag?: string;

  /**
   * SEO URL slug for thread
   */
  semantic_url?: string;

  /**
   * Year 4chan pass bought
   */
  since4pass?: number;

  /**
   * Number of unique posters in a thread
   */
  unique_ips?: number;

  /**
   * Mobile optimized image exists for post
   */
  m_img?: 1;

  /**
   * JSON representation of the most recent replies to a thread
   */
  last_replies?: Array<Post>;

  /**
   * Thread has reached the board's archive
   */
  archived?: number;

  /**
   * UNIX timestamp the post was archived
   */
  archived_on?: number
}