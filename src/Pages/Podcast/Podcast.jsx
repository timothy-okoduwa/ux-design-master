import React from 'react'
import './Podcast.css'
import s from '../image/podcast.png'
// import Iframe from 'react-iframe'
import useFetch from '../../components/Hooks/useFetch'
import { useParams } from 'react-router-dom'
const Podcast = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    'http://localhost:1337/playlists/' + id
  );
      if (loading) return <p>loading</p>;
      if (error) return <p>error</p>;
  return (
    <>
      {
        <div style={{ background: 'black', color: 'white',paddingTop:'120px' }}>
       

          <div className="container pt-4 letstyle">
            <div className="playlists">PlayList Tracks</div>
            <div>
              {data?.episodes.map((epi) => (
                <iframe
                  style={{ borderRadius: '12px',marginTop:'25px' }}
                  src={epi.mp3link}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
                // <div>{epi.episodeName}</div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Podcast


