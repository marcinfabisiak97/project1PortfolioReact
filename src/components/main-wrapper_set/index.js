import porfolio01 from '../../assets/quiz_aplikacja_motoryzacja.png';
import bitbucketicon from '../../assets/bit_bucket_icon.png';
import github from '../../assets/github_icon.png';
import porfolio02 from '../../assets/portfoliopr3.png';
const Mainwrapperset = () => {

	return (
		<div className="main-wrapper_set" >
			<a href='https://projekt2reactquiz.netlify.app'>
				<div className="main-wrapper_setimg">
					<img src={porfolio01} />
					<div className="main-wrapper_setimgbit">
						<a href='https://bitbucket.org/marcinfabisiak123/pr2/src/dev/'><img src={bitbucketicon} /></a>
						<a href='https://github.com/marcinfabisiak97/quizReact'><img src={github} /></a>
					</div>
				</div>
			</a>
			<a href='https://projekty3typescriptmarcinfabisiak.netlify.app'>
				<div className="main-wrapper_setimg">
					<img src={porfolio02} />
					<div className="main-wrapper_setimgbit">
						<a href='https://bitbucket.org/marcinfabisiak123/pr3/src/dev/'><img src={bitbucketicon} /></a>
						<a href='https://github.com/marcinfabisiak97/cvOnePageReactTypescrit'><img src={github} /></a>
					</div>
				</div>
			</a>
		</div >
	)
}
export default Mainwrapperset;
