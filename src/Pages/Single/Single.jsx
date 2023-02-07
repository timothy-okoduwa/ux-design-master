import React from 'react'
import useFetch from '../../components/Hooks/useFetch';
import './Single.css';
const Single = () => {
         const { loading, error, estate } = useFetch(
           'https://strapi-production-3f07.up.railway.app/api/singles'
         );
         if (loading) return <p>loading</p>;
         if (error) return <p>error</p>;
  return (
    <div className=" plist">
      <div className="care">Have fun listening to educating contents </div>

      <div style={{ marginTop: '30px' }}>
        <div className="container">
          <div className="row">
            {estate.map((props) => (
              <div className="col-12 col-lg-3 mt-4">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={props.attributes.link}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  title="wonderful"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single