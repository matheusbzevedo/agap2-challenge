import { IImage } from "./IImage";

interface IShow {
  genres?: string[];
  id?: number;
  image?: IImage;
  name?: string;
  summary?: string;
}

export type { IShow };
