import React from 'react'
import './HomePage.css';
import { BsPlayFill } from 'react-icons/bs';
// import s from '../image/mas.png';
import useFetch from '../../components/Hooks/useFetch';
const Hottest = () => {
             const { loading, error, estate } = useFetch(
               'https://strapi-production-3f07.up.railway.app/api/hottests'
             );
             if (loading) return <p>loading</p>;
             if (error) return <p>error</p>;
  return (
    <div>
      <div className="current pt-5">hottest Episode</div>
      <div className="row mt-5">
        {estate.map((props) => (
          <>
            <div className="col col-12 col-lg-6 ">
              <div className="">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={props.attributes.link}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  title="wonderful"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col col-12 col-lg-6 d-flex justify-content-center mt-5">
              <div className="soft">
                <div className="episode">
                  <span>{props.attributes.creatorName}</span>
                  <span className="span">.</span>
                  <span className="span"> {props.attributes.podcastName} </span>
                </div>
                <div className="talks">{props.attributes.description}</div>
                <div className="play">
                  <BsPlayFill /> 23k
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Hottest