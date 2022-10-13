import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Form = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    {/*making function to send email to developer by external web */ }
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
    return (
        <React.Fragment>
            <section className="formPart">
                <h2 >&#47;&#47; Contact me</h2>
                <p>If you are willing to work with me, please send me a meassage.</p>
                <form onSubmit={onSubmit} className="form">
                    <fieldset className="form__input">
                        <input
                            type='text'
                            name='reply_to'
                            placeholder='Your email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset className="form__input">
                        <input
                            type='text'
                            name='from_name'
                            placeholder='Your name'
                            value={toSend.from_name}
                            onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset className="form__textArea">
                        <textarea
                            type='text'
                            name='message'
                            placeholder='How can I help you? &#13;Please,put here your meassage/reguest.'
                            value={toSend.message}
                            onChange={handleChange}
                        >
                        </textarea>
                    </fieldset>
                    <fieldset className="form__submit">
                        <button type='submit'>Submit</button >
                    </fieldset>
                </form>
            </section >
        </React.Fragment>
    );
};

export default Form;