import Axios, { AxiosRequestConfig } from "axios";
import { Archive } from "./Archive";
import { Boards } from "./Board";
import { Catalog } from "./Catalog";
import { Page } from "./Page";
import { Thread } from "./Thread";
import { Threads } from "./Threads";

const domains = {
  api: "https://a.4cdn.org",
  media: "https://i.4cdn.org",
  static: "https://s.4cdn.org",
  sys: "https://sys.4chan.org",
}

const apiEndpoints = {
  // Typed by Threads
  threads: (board: string) => `/${board}/threads.json`,
  // Typed by Catalog
  catalog: (board: string) => `/${board}/catalog.json`,
  // Typed by Archive
  archive: (board: string) => `/${board}/archive.json`,
  // Typed by Page
  page: (board: string, page: number) => `/${board}/${page}.json`,
  // Typed by Thread
  thread: (board: string, op: number) => `/${board}/thread/${op}.json`,
  constants: {
    // Typed by Boards
    boards: '/boards.json'
  }
}

const mediaEndpoins = {
  user: (board: string, id: number, ext: string) => `/${board}/${id}.${ext}`,
  thumbnail: (board: string, id: number) => `/${board}/${id}s.jpg`,
}

const staticEndpoints = {
  countryFlag: (code: string) => `/image/country/${code}.gif`,
  trollFlag: (code: string) => `/image/country/troll/${code}.gif`,
  customSpoiler: (board: string, id: number) => `/image/spoiler-${board}${id}.gif`,
  constants: {
    spoiler: '/image/spoiler.png',
    closed: '/image/closed.gif',
    admin: '/image/adminicon.gif',
    moderator: '/image/modicon.gif',
    developer: '/image/developericon.gif',
    manager: '/image/managericon.gif',
    founder: '/image/foundericon.gif',
    fileDeletedOP: '/image/filedeleted.gif',
    fileDeletedReply: '/image/filedeleted-res.gif'
  }
}

abstract class chanAPI {
  constructor() {}

  private static axiosConfig: AxiosRequestConfig = {
    headers: {
      // 'If-Modified-Since': (new Date()).toUTCString()
    }
  }

  static async getBoards(): Promise<Boards> {
    return await (await Axios.get(domains.api + apiEndpoints.constants.boards, this.axiosConfig)).data as Boards;
  }

  static async getThreads(board: string): Promise<Threads> {
    return await (await Axios.get(domains.api + apiEndpoints.threads(board), this.axiosConfig)).data as Threads;
  }

  static async getArchive(board: string): Promise<Archive> {
    return await (await Axios.get(domains.api + apiEndpoints.archive(board)/*, this.axiosConfig*/)).data as Archive;
  }

  static async getPage(board: string, page: number): Promise<Page> {
    return await (await Axios.get(domains.api + apiEndpoints.page(board, page), this.axiosConfig)).data as Page;
  }

  static async getThread(board: string, postId: number): Promise<Thread> {
    try {
      const fetchedThread = await Axios.get(domains.api + apiEndpoints.thread(board, postId), this.axiosConfig)
      return await fetchedThread.data as Thread;
    } catch (error) {
      console.log(error.message);
      throw new Error("Yeah");
    }
  }

  static async getCatalog(board: string): Promise<Catalog> {
    return await (await Axios.get(domains.api + apiEndpoints.catalog(board), this.axiosConfig)).data as Catalog;
  }
}


const logBoards = async () => {
  console.log(await chanAPI.getBoards());
  // console.log(await chanAPI.getArchive("b").catch((error) => console.log(error.message)));
  // console.log(await (await chanAPI.getPage("b", 1)).threads[0].posts);
  // console.log(await chanAPI.getThread("wg", 7694630));
  // console.log(await chanAPI.getThreads("b"));
  // console.log(await chanAPI.getCatalog("b"));
}

logBoards();
