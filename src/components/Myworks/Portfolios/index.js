import porfolio01 from '../../../assets/portfoliopr2.png';
import bitbucketicon from '../../../assets/bit_bucket_icon.png';
import github from '../../../assets/github_icon.png';
import porfolio02 from '../../../assets/portfoliopr3.png';

const Portfolios = () => {
    return (
        <div className="portfolios" >
            <a target='blank' href='https://projekt2reactquiz.netlify.app'>
                <div className="portfolios__view">
                    <img src={porfolio01} alt='porfolio' />
                    <div className="portfolios__links">
                        <a target='blank' href='https://bitbucket.org/marcinfabisiak123/pr2/src/dev/'><img src={bitbucketicon} /></a>
                        <a target='blank' href='https://github.com/marcinfabisiak97/quizReact'><img src={github} /></a>
                    </div>
                </div>
            </a>
            <a target='blank' href='https://cv-react-typescript-onepage-pr3.netlify.app/'>
                <div className="portfolios__view">
                    <img src={porfolio02} alt='porfolio' />
                    <div className="portfolios__links">
                        <a target='blank' href='https://bitbucket.org/marcinfabisiak123/pr3/src/dev/'><img src={bitbucketicon} /></a>
                        <a target='blank' href='https://github.com/marcinfabisiak97/cv-projekt3-rem-Typescript'><img src={github} /></a>
                    </div>
                </div>
            </a>
        </div >
    )
}
export default Portfolios;
