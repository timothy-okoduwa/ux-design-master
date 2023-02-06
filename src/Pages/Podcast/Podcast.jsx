import React from 'react'
import './Podcast.css'
// import s from '../image/podcast.png'
// import Iframe from 'react-iframe'
import useFetch from '../../components/Hooks/useFetch'
import { useParams } from 'react-router-dom'
const Podcast = () => {
  const { id } = useParams();
  const { loading, error, estate } = useFetch(
    `https://podcast-backend-production.up.railway.app/api/playlists/${id}?populate=episodes`
  );
      if (loading) return <p>loading</p>;
      if (error) return <p>error</p>;
  return (
    <>
      {
        <div
          style={{ background: 'black', color: 'white', paddingTop: '120px' }}
        >
          <div className="container pt-4 letstyle">
            <div className="playlists">All Episodes</div>
            {estate.attributes.authorName}
            <div>
              {estate?.attributes?.episodes?.data?.map((ous) => (
                <div>
                  <iframe
                    style={{ borderRadius: '12px', marginTop: '25px' }}
                    src={ous?.attributes?.mp3link}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    title="dunno"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                  <div>{ous.authorName}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Podcast


