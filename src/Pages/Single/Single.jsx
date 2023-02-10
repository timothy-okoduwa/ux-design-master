import React from 'react'
import useFetch from '../../components/Hooks/useFetch';
import './Single.css';
import p from './pod.jpg'
import Loader from '../../components/Loader'
const Single = () => {
         const { loading, error, estate } = useFetch(
           'https://strapi-production-3f07.up.railway.app/api/singles'
         );
         if (loading) return (
<Loader/>
         );
         if (error) return <p>error</p>;
  return (
    <div className=" plist">
      <div className="care">Ux Design Episodes </div>

      <div style={{ marginTop: '30px' }}>
        <div className="container">
          <div className="row">
            {estate.map((props) => (
              <div className="col-12 col-lg-3 mt-4">
                <div className="taken">
                  <div>
                    <img src={p} alt="" className="okm mb-2" />
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single