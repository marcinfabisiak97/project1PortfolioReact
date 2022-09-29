import Images from '../../assets/exportFiles';
import React, { useState, useRef, useEffect } from 'react';

const Tools = () => {
  const [scrolled, setScrolled] = useState(false);
  const ourRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const handleScroll = () => {
    const YPosition = ourRef.current.getBoundingClientRect().top;
    const offset = window.scrollY;
    if (offset > YPosition) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const myTools = [
    { 'pict': Images.javaScript, 'text': 'Javascript' },
    { 'pict': Images.reactIcon, 'text': 'React' },
    { 'pict': Images.typeScriptIcon, 'text': 'Typescript' },
    { 'pict': Images.reduxIcon, 'text': 'Redux' },
    { 'pict': Images.sassIcon, 'text': 'Sass' },
    { 'pict': Images.flexboxIcon, 'text': 'Flexbox' },
    { 'pict': Images.bitBucket, 'text': 'Bitbucket' },
    { 'pict': Images.sourceTree, 'text': 'Sourcetree' }
  ]
  return (
    <div className="wrapperTools"  >
      <h2>&#47;&#47; Tools</h2>
      <h3>My essentials</h3>
      <div className="tollsIcon" ref={ourRef}>
        {
          myTools.map((el, index) => {
            {/*making animation using css transform and hook useEffect and function handleScroll */ }
            return (
              <div key={index} className={scrolled ? "tollsIcon__img" : "tollsIcon__img tollsIcon__img--translate"}>
                <img src={el.pict} alt={el.pict} />
                <p>{el.text}<br />{el.number}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Tools;