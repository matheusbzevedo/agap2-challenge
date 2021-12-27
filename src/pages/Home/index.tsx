import { useState, useEffect } from 'react';
import API from 'src/config/api';
import { IShow } from 'src/interfaces/IShow';
import { Image, Tag } from './style';
import Navbar from 'src/components/Navbar';
import EpisodesList from 'src/components/EpisodesList';

export default function Home() {
  const [show, SetShow] = useState<IShow>({});

  useEffect(() => {
    API.get('/shows/6771')
    .then(response => response.data)
    .then((data: IShow) => {
      SetShow({
        genres: data.genres,
        id: data.id,
        image: data.image,
        name: data.name,
        summary: data.summary
      });
    })
    .catch(error => console.error(error));
  }, []);

  const tags = () => {
    let tags: any = [];

    show?.genres?.map(genres => tags.push(<Tag key={genres} className="tag is-primary">{genres}</Tag>))

    return tags;
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='column is-centered'>
          <h1 className='is-size-2'>{ show.name }</h1>
        </div>
        <div className='column'>
          <figure className='image is-1by1'>
            <Image src={show.image?.original} alt=''/>
          </figure>
          <div className='box'>
            {tags()}
            <div className='content' dangerouslySetInnerHTML={{ __html: show.summary || ''}}></div>
          </div>
        </div>
        <div className='column'>
          <EpisodesList />
        </div>
      </div>
    </>
  );
}
