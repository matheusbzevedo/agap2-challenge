import { IEpisode } from "./IEpisode";

interface ISeason {
  id: number;
  number: number;
  episodes: IEpisode[];
}

export type { ISeason };
