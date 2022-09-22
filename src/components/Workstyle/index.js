import photo1 from '../../assets/photo-1.jpg';
import photo2 from '../../assets/photo-2.jpg';

const Workstyle = ({ blogref }) => {
    return (
        <div className="workStyle" ref={blogref}>
            <div className="workStyle__mainTitle">
                <h2 >&#47;&#47; How I work</h2>
                <h3>Hints and tips</h3>
            </div>
            <div className="workStyle__paragraphs">
                <div className="paragraph">
                    <div className="paragraph__photo">
                        <img src={photo1} alt="laptop" />
                    </div>
                    <div className="paragraph__descr">
                        <h2>//Searching on my own</h2>
                        <h3>Using my own experience</h3>
                        <p>I always start solving problems on my own.
                            The best way is to serach similar problem
                            and adjust it to make needed solution.</p>
                    </div>
                </div>
                <div className="paragraph">
                    <div className="paragraph__photo">
                        <img src={photo2} alt="laptop" />
                    </div>
                    <div className="paragraph__descr">
                        <h2>//Looking for help in Stack Overflow</h2>
                        <h3>Using experience of others</h3>
                        <p>When I don't have clue how to solve problem I look it on Stack, sometimes make a new topic.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Workstyle;