import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import './HomePage.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const Slider = ({ data }) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  //Anim
  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.2 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.2 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  return (
    <div>
      <div className="App">
        {scrollX !== 0 && (
          <MdArrowBackIosNew
            className="next"
            onClick={() => slide(-300)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
          />
        )}

        {data.map((props) => (
          <div className="ul" ref={scrl} onScroll={scrollCheck} key={props.id}>
            <img
              src={`http://localhost:1337${props.thumbnail.url}`}
            //   className="imagetag"
              alt="wow"
            />
          </div>
        ))}

        {!scrolEnd && (
          <MdArrowForwardIos
            className="next2"
            onClick={() => slide(+300)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
            style={{ fontSize: '3px' }}
          />
        )}
      </div>
    </div>
  );
};

export default Slider