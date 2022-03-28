import reacticon from '../../assets/devtech/react.png';
import typescripticon from '../../assets/devtech/typescript.png';
import sassicon from '../../assets/devtech/sass.png';
import reduxicon from '../../assets/redux_icon_s.png';
import bitbucket from '../../assets/devtech/bitbucket.png';
import sourcetree from '../../assets/devtech/sourcetree.png';
import flexboxicon from '../../assets/devtech/css.png';
import javascript from '../../assets/devtech/javascript.png';
import React, { useState, useRef, useEffect } from 'react';
const Mainwrappertools = ({ myworkref }) => {
  const [scrolled, setScrolled] = useState(false);
  const ourRef = useRef(null);
  const handleScroll = () => {
    const YPosition = ourRef.current.getBoundingClientRect().top;
    const offset = window.scrollY;
    if (offset > YPosition) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const myTools = [
    { 'klas': 'main-tollsicon_img', 'pict': javascript, 'text': 'Javascript' },
    { 'klas': 'main-tollsicon_img', 'pict': reacticon, 'text': 'React' },
    { 'klas': 'main-tollsicon_img', 'pict': typescripticon, 'text': 'Typescript' },
    { 'klas': 'main-tollsicon_img', 'pict': reduxicon, 'text': 'Redux' },
    { 'klas': 'main-tollsicon_img', 'pict': sassicon, 'text': 'Sass' },
    { 'klas': 'main-tollsicon_img', 'pict': flexboxicon, 'text': 'Flexbox' },
    { 'klas': 'main-tollsicon_img', 'pict': bitbucket, 'text': 'Bitbucket' },
    { 'klas': 'main-tollsicon_img', 'pict': sourcetree, 'text': 'Sourcetree' }
  ]
  {/*making animation using css transform and hook useEffect and function handleScroll */ }
  return (
    <div className="main-wrapper_tools"  >
      <h2>//Tools</h2>
      <h3>My essentials</h3>
      <div className="main-tollsicon" ref={ourRef}>
        {
          myTools.map((el, index) => {
            return (
              <div style={{ transform: `translateX(${(scrolled ? "0" : "-100vw")})` }} key={index} className={el.klas}>
                <img src={el.pict} />
                <p>{el.text}<br />{el.number}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Mainwrappertools;