import React from 'react';
import github from '../../assets/github_icon.png';
import devicon from '../../assets/dev_icon.png';
import easycode from '../../assets/easy_code_button.png';
const Upperpartanddownpart = ({aboutref, skillref, myworkref, blogref, contactref }) => {
    const myBar=[
    {'klas': 'bar-php', 'text': 'php 20%'},
    {'klas': 'bar-javascript', 'text': 'javascript 60%'},
    {'klas': 'bar-css', 'text': 'css 80%'},
    {'klas': 'bar-html', 'text': 'html 100%'},
    {'klas': 'bar-node', 'text': 'node 20%'},
    {'klas': 'bar-go', 'text': 'go 10%'}
    ]
    const Bar=(props)=>{
        return(
            <div className="wrapper-bar">
                <div className={props.klas}>{props.text}</div>
            </div>
            )
    }
return (
<div className="main-upperpartanddownpart col-12">
    <div className="main-upperpart">
        <div className="main-info">
            <h2> // Hi, My name is Martin Fabisiak</h2>
            <h3>Software Engineer</h3>
            <p>Passionate Techy and Tech Author<br />with 3
                yers of experience within the field </p>
            <div className="main-info_seework">
                <p>See my work</p>
                <img src={github} />
                <img src={devicon} />
            </div>
        </div>
        <div className="main-photo_rightdescription">
            <h1> // I am freelancer</h1>
            <p>Contact me if you want to work with me</p>
            <div>
                <button><strong>Hire me</strong></button>
                <button><strong>Download CV</strong></button>
            </div>
        </div>
    </div>
    <div className="main-downpart">
        <div className="main-photo_belowdescription">
            <h2 ref ={skillref}> // About me</h2>
            <h3>All about Techy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
            <h3>My interests</h3>
            <ul>
                <li>music</li>
                <li>kitesurfing</li>
                <li>cycling</li>
            </ul>
            <p>Ukończyłem kursy Easy Code <img src={easycode} /></p>
        </div>
        <div className="main-wrapper_bars">
            <h2 id="skills">//Skills</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            {
               myBar.map((el, index)=>{
                   return(<Bar key={index} klas={el.klas} text={el.text}/>)
               }) 
            }
        </div>
    </div>
</div>
)
}
export default Upperpartanddownpart;
