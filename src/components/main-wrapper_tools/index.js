import reacticon from '../../assets/devtech/react.png';
import typescripticon from '../../assets/devtech/typescript.png';
import sassicon from '../../assets/devtech/sass.png';
import reduxicon from '../../assets/redux_icon_s.png';
import bitbucket from '../../assets/devtech/bitbucket.png';
import sourcetree from '../../assets/devtech/sourcetree.png';
import flexboxicon from '../../assets/devtech/css.png';
import javascript from '../../assets/devtech/javascript.png';
import { useState, useRef, useLayoutEffect } from 'react';
const Mainwrappertools = ({ aboutref, skillref, myworkref, blogref, contactref }) => {
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

  return (
    <div className="main-wrapper_tools" ref={myworkref}>
      <h2>//Tools</h2>
      <h3>My essentials</h3>
      <div className="main-tollsicon">
        {
          myTools.map((el, index) => {
            return (
              <div key={index} className={el.klas}>
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