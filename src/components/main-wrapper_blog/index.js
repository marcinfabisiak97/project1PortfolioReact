import photo1 from '../../assets/photo-1.jpg';
import photo2 from '../../assets/photo-2.jpg';
const Mainwrapperblog = ({ aboutref, skillref, myworkref, blogref, contactref }) => {
return (
<div class="main-wrapper_blog" ref={blogref}>
    <div class="main-wrapper_blogtitle">
        <h2 id="blog">//Blog posts</h2>
        <h3>Hints and tips</h3>
    </div>
    <div class="main-wrapper_blogtitle01">
        <div class="main-wrapper_blogtitle01title1">
            <div class="main-wrapper_blogtitle01img">
                <img src={photo1} />
            </div>
            <div class="main-wrapper_blogtitle01desc">
                <h2>//Title 01</h2>
                <h4>author 01.09.2020</h4>
                <h3>Secondary Title</h3>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paridatur. <a href="">Read more &gt </a></p>
            </div>
        </div>
        <div class="main-wrapper_blogtitle01title2">
            <div class="main-wrapper_blogtitle01img">
                <img src={photo2} />
            </div>
            <div class="main-wrapper_blogtitle01desc">
                <h2>//Title 01</h2>
                <h4>author 01.09.2020</h4>
                <h3>Secondary Title </h3>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <a href="">Read more &gt </a></p>
            </div>
        </div>
    </div>
</div>
)
}
export default Mainwrapperblog;