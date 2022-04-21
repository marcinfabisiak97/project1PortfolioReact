import React, { useRef } from 'react';
import Navigation from '../../components/Navigation';
import Upperpartanddownpart from '../../components/UpperpartAndDownpart';
import Tools from '../../components/Tools';
import Mainwrappermyworks from '../../components/main-wrapper_myworks';
import Mainwrapperset from '../../components/main-wrapper_set';
import Mainwrapperblog from '../../components/main-wrapper_blog';
import Mainwrappercontact from '../../components/main-wrapper_contact'
const Homepage = () => {
    const aboutref = useRef(null);
    const skillref = useRef(null);
    const myworkref = useRef(null);
    const blogref = useRef(null);
    const contactref = useRef(null);
    {/*using useRef hook to make navigation */ }
    return (
        <div className='page'>
            <Navigation {...{ aboutref, skillref, myworkref, blogref, contactref }} />
            <Upperpartanddownpart {...{ aboutref, skillref }} />
            <Tools {...{ myworkref }} />
            <Mainwrappermyworks {...{ myworkref }} />
            <Mainwrapperset />
            <Mainwrapperblog {...{ blogref }} />
            <Mainwrappercontact {...{ contactref }} />
        </div>
    );
};
export default Homepage;