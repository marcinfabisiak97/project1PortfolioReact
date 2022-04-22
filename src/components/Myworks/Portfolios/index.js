import porfolio01 from '../../../assets/portfoliopr2.png';
import bitbucketicon from '../../../assets/bit_bucket_icon.png';
import github from '../../../assets/github_icon.png';
import porfolio02 from '../../../assets/portfoliopr3.png';

const Portfolios = () => {
    return (
        <div className="main-wrapper_set" >
            <a target='blank' href='https://projekt2reactquiz.netlify.app'>
                <div className="main-wrapper_setimg">
                    <img src={porfolio01} />
                    <div className="main-wrapper_setimgbit">
                        <a target='blank' href='https://bitbucket.org/marcinfabisiak123/pr2/src/dev/'><img src={bitbucketicon} /></a>
                        <a target='blank' href='https://github.com/marcinfabisiak97/quizReact'><img src={github} /></a>
                    </div>
                </div>
            </a>
            <a target='blank' href='https://projekty3typescriptmarcinfabisiak.netlify.app'>
                <div className="main-wrapper_setimg">
                    <img src={porfolio02} />
                    <div className="main-wrapper_setimgbit">
                        <a target='blank' href='https://bitbucket.org/marcinfabisiak123/pr3/src/dev/'><img src={bitbucketicon} /></a>
                        <a target='blank' href='https://github.com/marcinfabisiak97/cvOnePageReactTypescrit'><img src={github} /></a>
                    </div>
                </div>+
            </a>
        </div >
    )
}
export default Portfolios;
