import kontaktikona from '../../assets/kontakt_ikona.png';
import zdj1 from '../../assets/zdj1.jpg';
import React, { useState } from 'react';
import { send } from 'emailjs-com';
const Mainwrappercontact = ({ contactref }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_angvk1e',
            'template_7othq2o',
            toSend,
            'user_CZXASdETJkJ7zZ1G1Ouhg'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    {/*making function to send email to developer */ }
    return (
        <div className="main-wrapper_contact" ref={contactref}>
            <div className="main-wrapper_contactparent">
                <h2 id="contact">//Contact me</h2>
                <p>If you are willing to work with me, contact me. I can join your conference to serve you with engeneering experience.</p>
                <form onSubmit={onSubmit} class="main-wrapper_form">
                    <div className="main-wrapper_contactchild1">
                        <input
                            type='text'
                            name='reply_to'
                            placeholder='Your email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="main-wrapper_contactchild2">
                        <input
                            type='text'
                            name='from_name'
                            placeholder='Your name'
                            value={toSend.from_name}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="main-wrapper_contactchild3">
                        <textarea
                            type='text'
                            name='message'
                            placeholder='How can I help you? &#13;Please,put here your meassage/reguest.'
                            value={toSend.message}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                    <div className="main-wrapper_contactchild">
                        <button type='submit'>Submit</button >
                    </div>
                </form>
            </div >
            <div className='wrapper-contact'>
                <div className="main-info_contact">
                    <a href="tel://+48604132689"> <img src={kontaktikona} alt="contact" /></a>
                    <div className="main-info_contactdesc">
                        <p>marcibfabisiak123@gmail.com</p>
                        <p>+48 604 132 689</p>
                    </div>
                </div>
                <div className="main-wrapper_contactdescr">
                    <div className="main-wrapper_contactphoto">
                        <img src={zdj1} alt="developer" />
                    </div>
                    <p>author: Marcin Fabisiak</p>
                    <p>description: Frontend Developer</p>
                    <a href='https://github.com/marcinfabisiak97'>
                        <p>git: https://github.com/marcinfabisiak97</p>
                    </a>
                </div>
            </div>
        </div >
    )
}
export default Mainwrappercontact;