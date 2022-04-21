import reacticon from '../../assets/devtech/react.png';
import typescripticon from '../../assets/devtech/typescript.png';
import sassicon from '../../assets/devtech/sass.png';
import reduxicon from '../../assets/redux_icon_s.png';
import bitbucket from '../../assets/devtech/bitbucket.png';
import sourcetree from '../../assets/devtech/sourcetree.png';
import flexboxicon from '../../assets/devtech/css.png';
import javascript from '../../assets/devtech/javascript.png';
import React, { useState, useRef, useEffect } from 'react';
const Mainwrappertools = () => {
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
    { 'pict': javascript, 'text': 'Javascript' },
    { 'pict': reacticon, 'text': 'React' },
    { 'pict': typescripticon, 'text': 'Typescript' },
    { 'pict': reduxicon, 'text': 'Redux' },
    { 'pict': sassicon, 'text': 'Sass' },
    { 'pict': flexboxicon, 'text': 'Flexbox' },
    { 'pict': bitbucket, 'text': 'Bitbucket' },
    { 'pict': sourcetree, 'text': 'Sourcetree' }
  ]
  return (
    <div className="main-wrapper_tools"  >
      <h2>//Tools</h2>
      <h3>My essentials</h3>
      <div className="main-tollsicon" ref={ourRef}>
        {
          myTools.map((el, index) => {
            {/*making animation using css transform and hook useEffect and function handleScroll */ }
            return (
              <div key={index} className={scrolled ? "main-tollsicon_img" : "main-tollsicon_img main-tollsicon_imgTranslate"}>
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