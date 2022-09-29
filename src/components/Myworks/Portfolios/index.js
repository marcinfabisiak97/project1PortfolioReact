import Images from '../../../assets/exportFiles';
const Portfolios = () => {
    return (
        <div className="portfolios" >

            <div className="portfolios__view">
                <a target='blank' href='https://projekt2reactquiz.netlify.app'>
                    <img src={Images.porfolio01} alt='porfolio' />
                </a>
                <div className="portfolios__links">
                    <a target='blank' href='https://github.com/marcinfabisiak97/quizReact'><img src={Images.gitHub} alt="github" /></a>
                </div>
            </div>


            <div className="portfolios__view">
                <a target='blank' href='https://cv-react-typescript-onepage-pr3.netlify.app/'>
                    <img src={Images.porfolio02} alt='porfolio' />
                </a>
                <div className="portfolios__links">
                    <a target='blank' href='https://github.com/marcinfabisiak97/cv-projekt3-rem-Typescript'><img src={Images.gitHub} alt="github" /></a>
                </div>
            </div>

        </div >
    )
}
export default Portfolios;
