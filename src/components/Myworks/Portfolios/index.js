import Images from '../../../assets/exportFiles';
const Portfolios = () => {
    return (
        <div className="portfolios" >
            <a target='blank' href='https://projekt2reactquiz.netlify.app'>
                <div className="portfolios__view">
                    <img src={Images.porfolio01} alt='porfolio' />
                    <div className="portfolios__links">

                        <a target='blank' href='https://github.com/marcinfabisiak97/quizReact'><img src={Images.gitHub} alt="github" /></a>
                    </div>
                </div>
            </a>
            <a target='blank' href='https://cv-react-typescript-onepage-pr3.netlify.app/'>
                <div className="portfolios__view">
                    <img src={Images.porfolio02} alt='porfolio' />
                    <div className="portfolios__links">

                        <a target='blank' href='https://github.com/marcinfabisiak97/cv-projekt3-rem-Typescript'><img src={Images.gitHub} alt="github" /></a>
                    </div>
                </div>
            </a>
        </div >
    )
}
export default Portfolios;
