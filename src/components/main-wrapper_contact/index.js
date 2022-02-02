import kontaktikona from '../../assets/kontakt_ikona.png';
import zdj1 from '../../assets/zdj1.jpg';
const Mainwrappercontact = ({ aboutref, skillref, myworkref, blogref, contactref }) => {
    return (
        <div className="main-wrapper_contact" ref={contactref}>
            <div className="main-wrapper_contactparent">
                <h2 id="contact">//Contact me</h2>
                <p>If you are willing to work with me, contact me. I can join your conference to serve you with engeneering experience.</p>
                <div className="main-wrapper_contactchild1">
                    <input size="40px" type="email" name="" id="email" placeholder="Your E-mail" required />
                </div>
                <div className="main-wrapper_contactchild2">
                    <input type="email" name="" id="name" placeholder="Your name" required />
                </div>
                <div className="main-wrapper_contactchild3">
                    <textarea defaultValue='How can I help you? &#13;Please,put here your meassage/reguest"'></textarea>
                </div>
            </div>
            <div className="main-wrapper_contactchild">
                <input type="button" name="" value="send" />
            </div>
            <div className="main-info_contact">
                <img src={kontaktikona} />
                <div className="main-info_contactdesc">
                    <p>marcibfabisiak123@gmail.com</p>
                    <p>+48 604 132 689</p>
                </div>
            </div>
            <div className="main-wrapper_contactdescr">
                <div className="main-wrapper_contactphoto">
                    <img src={zdj1} />
                </div>
                <p>author: Marcin Fabisiak</p>
                <p>description: Fron End Developer</p>
                <p>git: https://github.com/marcinfabisiak97</p>

            </div>
        </div>
    )
}
export default Mainwrappercontact;