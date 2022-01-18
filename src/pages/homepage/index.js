import React,{useRef} from 'react';
import Wrapper from '../../components/wrapper';
import Upperpartanddownpart from '../../components/main-upperpartanddownpart';
import Mainwrappertools from '../../components/main-wrapper_tools';
import Mainwrappermyworks from '../../components/main-wrapper_myworks';
import Mainwrapperset from '../../components/main-wrapper_set';
import Mainwrapperblog from '../../components/main-wrapper_blog';
import Mainwrappercontact from '../../components/main-wrapper_contact'
const Homepage = () => {
	const aboutref=useRef(null);
    const skillref=useRef(null);
    const myworkref=useRef(null);
    const blogref=useRef(null);
    const contactref=useRef(null);
return (
<div style={{padding: '0px', maring:'0px'}}>
    <Wrapper {...{aboutref, skillref, myworkref, blogref, contactref }} />
    <Upperpartanddownpart {...{aboutref, skillref, myworkref, blogref, contactref }} />
    <Mainwrappertools {...{aboutref, skillref, myworkref, blogref, contactref }} />
    <Mainwrappermyworks {...{aboutref, skillref, myworkref, blogref, contactref }} />
    <Mainwrapperset {...{aboutref, skillref, myworkref, blogref, contactref }} />
    <Mainwrapperblog {...{aboutref, skillref, myworkref, blogref, contactref }} />
    <Mainwrappercontact {...{aboutref, skillref, myworkref, blogref, contactref }} />
</div>
);
};
export default Homepage;