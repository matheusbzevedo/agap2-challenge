import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import API from 'src/config/api';
import { IEpisode } from 'src/interfaces/IEpisode';
import Navbar from 'src/components/Navbar';
import { Skeleton } from '@mui/material';

export default function Details() {
  let params = useParams();
  let navigate = useNavigate();
  const [episode, setEpisode] = useState<IEpisode>();

  useEffect(() => {
    let param: any = params.id;

    if (Number.isInteger(parseInt(param))) {
      API.get(`/episodes/${param}`)
      .then(response => response.data)
      .then((data: IEpisode) => {
        setEpisode({
          number: data.number,
          season: data.season,
          id: data.id,
          image: data.image,
          name: data.name,
          summary: data.summary
        });
      })
      .catch(error => {
        navigate('/404');
      });
    } else {
      navigate('/');
    }
  }, [navigate, params.id]);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='column'>
          <div className='box'>
            <article className='media'>
              <div className='media-left'>
                {
                  episode
                  ?
                    <figure className='image is-128x128'>
                      <img src={episode?.image?.original} alt='T' />
                    </figure>
                  :
                  <Skeleton variant="rectangular" width={128} height={128} />
                }
              </div>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    { episode
                      ? episode?.name
                      : <Skeleton variant='text' />
                    }
                  </p>
                  {
                    episode
                    ? <span className='tag'>Season: {episode?.season}</span>
                    : <Skeleton variant='text' />
                  }
                  { episode
                    ? <p dangerouslySetInnerHTML={{ __html: episode?.summary || ''}}></p>
                    : <Skeleton variant='text' height={80} />
                  }
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
