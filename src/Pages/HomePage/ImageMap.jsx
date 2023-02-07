import React from 'react'
import useFetch from '../../components/Hooks/useFetch';
import './HomePage.css'
const ImageMap = ({ estate }) => {
//   const { loading, error, estate } = useFetch(
//     'https://strapi-production-3f07.up.railway.app/api/playlists?populate=thumbnail'
//   );
//   if (loading) return <p>loading</p>;
//   if (error) return <p>error</p>;
  return (
    <div>
      {estate?.attributes?.thumbnail?.data?.map((ous) => (
        <div key={ous.id}>
          <img className="imagetag" src={ous?.attributes?.url} />
          <div>{ous?.attributes?.url}</div>
        </div>
      ))}
    </div>
  );
};

export default ImageMap