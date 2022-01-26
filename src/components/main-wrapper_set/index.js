import porfolio01 from '../../assets/quiz_aplikacja_motoryzacja.png';
import bitbucketicon from '../../assets/bit_bucket_icon.png';
import externallink from '../../assets/external_link_icon.png';
import porfolio02 from '../../assets/portfoliopr3.png';
import porfolio03 from '../../assets/portfolio_case_03.png';
import porfolio04 from '../../assets/portfolio_case_04.png';
import porfolio05 from '../../assets/portfolio_case_05.png';
import porfolio06 from '../../assets/portfolio_case_06.png';
const Mainwrapperset = () => {

	return (
		<div class="main-wrapper_set" >
			<div class="main-wrapper_setimg">
				<img src={porfolio01} />
				<div class="main-wrapper_setimgbit">
					<a href='https://bitbucket.org/marcinfabisiak123/pr2/src/dev/'><img src={bitbucketicon} /></a>
					<a href='https://projekt2reactquiz.netlify.app'><img src={externallink} /></a>
				</div>
			</div>
			<div class="main-wrapper_setimg">
				<img src={porfolio02} />
				<div class="main-wrapper_setimgbit">
					<a href='https://bitbucket.org/marcinfabisiak123/pr3/src/dev/'><img src={bitbucketicon} /></a>
					<a href='https://projekty3typescriptmarcinfabisiak.netlify.app'><img src={externallink} /></a>
				</div>
			</div>

		</div >
	)
}
export default Mainwrapperset;
