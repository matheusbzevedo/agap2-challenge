import { IImage } from "./IImage";

interface IEpisode {
  name?: string;
  image?: IImage;
  summary?: string;
  id?: number;
  number: number;
  season: number;
}

export type { IEpisode };
