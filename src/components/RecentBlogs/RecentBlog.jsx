import "./RecentBlog.css";
import bowbridgecentral from "../../assets/images/bowbridgecentral.png";

const RecentBlog = () => {
    return (
        <div>
            <div className="container">
                <div className="RecentBlogTop p-5 mt-5 text-center">
                    <h2 className="recent-title">
                        Recent Blog and <span>Articles</span>
                    </h2>
                    <p className="font-normal mt-4 mb-16 recent-para">
                        Until recently, world hunger was not declared since 2014. Today an unprecedented food crisis is engulfing the world. The number of
                        people with worsening hunger has more than doubled. More than 800 million people go to bed with empty stomachs. In every 20,000 adults
                        and children under the age of 5, 3 die of hunger every day, about 3 people in 10 are malnourished, and 2 in 7 households face utmost
                        food shortages. With the worlds population being over 7 billion all over, and the earth capable of growing more than enough food, there
                        are still millions of hungry and malnourished people. It is so very easy for one to see every detail of their bones. They do not have
                        the energy to talk or even walk. Every day they yearn for the miracle of seeing food on the plate.
                    </p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-5 img-fluid text-center">
                        <img src={bowbridgecentral} className="img-fluid" alt="" />
                    </div>

                    <div className="col-md-6 BlogSecondColBox">
                        <div className="RecentBlogbox1 RecentBlogBox ps-5 pe-5 me-5">
                            <button className="my-3">New</button>
                            <h3 className="my-3">Why Do People Suffer From Hunger Crisis?</h3>
                            <p>Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches</p>
                        </div>

                        <div className="RecentBlogbox2 RecentBlogBox ps-5 pe-5">
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
