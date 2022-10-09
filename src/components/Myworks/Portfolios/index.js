import Images from '../../../assets/exportFiles';
const Portfolios = () => {
    return (
        <section className="portfolios" >
            <article className="portfolios__view">
                <figure>
                    <a target='blank' href='https://projekt2reactquiz.netlify.app'>
                        <img src={Images.porfolio01} alt='porfolio' />
                    </a>
                </figure>
                <figure className="portfolios__links">
                    <a target='blank' href='https://github.com/marcinfabisiak97/quizReact'>
                        <img src={Images.gitHub} alt="github" />
                    </a>
                </figure>
            </article>
            <article className="portfolios__view">
                <figure>
                    <a target='blank' href='https://cv-react-typescript-onepage-pr3.netlify.app/'>
                        <img src={Images.porfolio02} alt='porfolio' />
                    </a>
                </figure>
                <figure className="portfolios__links">
                    <a target='blank' href='https://github.com/marcinfabisiak97/cv-projekt3-rem-Typescript'>
                        <img src={Images.gitHub} alt="github" />
                    </a>
                </figure>
            </article>
        </section >
    )
}
export default Portfolios;
