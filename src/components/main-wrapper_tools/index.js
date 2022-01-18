import reacticon from '../../assets/_react_icon_s.png';
import webpackicon from '../../assets/webpack_icon.png';
import expresicon from '../../assets/express_icon.png';
import styledcomponents from '../../assets/styled_components_icon.png';
import reduxicon from '../../assets/redux_icon_s.png';
import toolprogram from '../../assets/tool_program_ikona.png';
import flexboxicon from '../../assets/flexbox_icon_s.png';
const Mainwrappertools = ({aboutref, skillref, myworkref, blogref, contactref }) => {
const myTools=[
{'klas': 'main-tollsicon_img', 'pict': reacticon,'text': 'React 16.6.3'},
{'klas': 'main-tollsicon_img', 'pict': webpackicon,'text': 'Webpack 4.19.1'},
{'klas': 'main-tollsicon_img', 'pict': expresicon,'text': 'Express 4.16.4'},
{'klas': 'main-tollsicon_imgstyle', 'pict': styledcomponents,'text': 'Styled Components', 'number':'4.16.4'},
{'klas': 'main-tollsicon_img', 'pict': reduxicon,'text': 'Redux 4.01'},
{'klas': 'main-tollsicon_img', 'pict': flexboxicon,'text': 'Flexbox 4.01'},
{'klas': 'main-tollsicon_imgtool', 'pict': toolprogram,'text': 'Program 5.2.1'},
{'klas': 'main-tollsicon_imgtool', 'pict': toolprogram,'text': 'Program 5.2.2'}
]
const Image =(props)=>{
return(
<div class={props.klas}>
    <img src={props.pict} />
    <p>{props.text}<br/>{props.number}</p>
</div>
)
}
return (
<div class="main-wrapper_tools" ref={myworkref}>
    <h2>//Tools</h2>
    <h3>My essentials</h3>
    <div class="main-tollsicon">
      {
      myTools.map((el,index)=>{
      return(
      <Image key={index} klas={el.klas} pict={el.pict} text={el.text} number={el.number}/>
      )
      })
      }
    </div>
</div>
)
}
export default Mainwrappertools;