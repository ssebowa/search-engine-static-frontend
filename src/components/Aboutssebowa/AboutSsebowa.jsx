import "./AboutSsebowa.css";
import googleplay from "../../assets/images/about/googleplay.png";
import appstore from "../../assets/images/about/appstore.png";
import tree from "../../assets/images/about/tree.png";

const AboutSsebowa = () => {
    return (
        <div>
            <div className="container aboutssebowa-main d-flex">
                <div className="row">
                    <div className="col-md-6 p-3 my-2">
                        <div className="imgdoubleborder">
                            <img src={tree} className=" aboutssebowaimg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 aboutssebowaDesc my-2">
                        <h3>Learn About Ssebowa </h3>
                        <p>The more you use Ssebowa, the more you realize how minor daily changes can make major differences in the world.</p>
                        <div className="availabilyimages">
                            <img src={googleplay} alt="" className="me-3" />
                            <img src={appstore} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSsebowa;
