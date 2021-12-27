import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from 'src/config/api';
import { IEpisode } from 'src/interfaces/IEpisode';

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    API.get('/shows/6771/episodes')
    .then(response => response.data)
    .then((data: IEpisode[]) => {
      setEpisodes(data);
    })
    .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h1>Episodes</h1>
      {episodes && episodes.map(episode => {
        return (
          <div key={episode.id} className="box">
            <Link to={`/episode/${episode.id}`}>{episode.name}</Link>
          </div>
        )
      })}
    </>
  );
}
