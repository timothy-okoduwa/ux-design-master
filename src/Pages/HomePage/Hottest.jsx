import React from 'react'
import './HomePage.css';
import { BsPlayFill } from 'react-icons/bs';
// import s from '../image/mas.png';
import p from './pod.jpg'
import useFetch from '../../components/Hooks/useFetch';
import Loader from '../../components/Loader'
const Hottest = () => {
             const { loading, error, estate } = useFetch(
               'https://strapi-production-3f07.up.railway.app/api/hottests'
             );
             if (loading) return (
            <Loader/>
             );
             if (error) return <p>error</p>;
  return (
    <div>
      <div className="current pt-5">Hottest Episode</div>
      <div className="row mt-5">
        {estate.map((props) => (
          <>
            <div className="col col-12 col-lg-6 ">
              <div className="anchor">
                <div className="text-info">
                  <img src={p} alt="" className="okv mb-2" />
                </div>
                <iframe
                  style={{ borderRadius: '0 0 12px 12px' }}
                  src={props.attributes.link}
                  height="102px"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  title="wonderful"
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