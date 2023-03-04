import "./RecentBlog.css";
import bowbridgecentral from "../../assets/images/bowbridgecentral.png";

const RecentBlog = () => {
    return (
        <div>
            <div className="RecentBlogTop p-5 mt-5 text-center">
                <h2>
                    Recent Blog and <span>Articles</span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-5 img-fluid text-center">
                        <img src={bowbridgecentral} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 BlogSecondColBox">
                        <div className="RecentBlogbox1 RecentBlogBox">
                            <button className="my-3">New</button>
                            <h3 className="my-3">Why Do People Suffer From Hunger Crisis?</h3>
                            <p>Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches</p>
                        </div>
                        <div className="RecentBlogbox2 RecentBlogBox">
                            <button className="my-3">Popular Tour</button>
                            <h3 className="my-3">Why Global Warming Keeps On Increasing?</h3>
                            <p>
                                Human activity has increased greenhouse gases in the atmosphere since the Industrial Revolution, leading to more heat retention
                                and an increase in surface temperatures.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;
