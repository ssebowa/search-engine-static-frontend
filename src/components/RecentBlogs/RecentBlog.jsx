import "./RecentBlog.css";
import bowbridgecentral from "../../assets/images/bowbridgecentral.png";

const RecentBlog = () => {
    return (
        <div>
            <div className="container w-100">
                <div className="RecentBlogTop p-5 mt-5 text-center">
                    <h2 className="recent-title">
                        Recent Blogs and <span>Articles</span>
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

            {/* <div className="w-100 BlogSecondBox">
                    <img src={bowbridgecentral} className="blog_img" alt="" />
                </div>
                <div className="w-50 RecentBlogbox1">
                <div className="w-25 p-4 RecentBlogbox2 RecentBlogBox">
                    <button className="btn text-light my-3">Popular Tour</button>
                    <h3 className="my-3  fs-4 fw-600">Why Global Warming Keeps On Increasing?</h3>
                    <p >
                    
                        Human activity has increased greenhouse gases in the atmosphere since the Industrial Revolution, leading to more heat retention and an
                        increase in surface temperatures.
                    </p>
                </div>

                <div className="w-25 p-4 RecentBlogbox2 RecentBlogBox">
                    <button className="btn text-light my-3">New</button>
                    <h3 className="my-3 fs-4 fw-600">Why Do People Suffer From Hunger Crisis?</h3>
                    <p >Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches</p>
                </div> */}

            {/* </div> */}

            <div className="container wrap w-100 d-flex justify-content-center gap-5">
                <div className="box w-50">
                    <img src={bowbridgecentral} className="blog_img" alt="" />
                </div>

                <div className="box1 wrap2  w-50 d-flex rounded-2  gap-4">
                    <div className="inner-box p-4 bg-light shadow">
                        <button
                            className="d-flex  justify-content-cente p-1 pb-1 text-white"
                            style={{ backgroundColor: "#77C54E", width: "109.48px", borderRadius: "6px", height: "26px" }}
                        >
                            Popular Tour
                        </button>
                        <h4 className="text-start my-4">Why Global Warming Keeps On Increasing?</h4>
                        <p className="text-start">
                            Since the Industrial Revolution, human activities have increased greenhouse gases in the atmosphere resulting in more heat retention
                            and increased surface temperatures.
                        </p>
                    </div>{" "}
                    <div className="inner-box p-4 bg-light rounded-2 shadow">
                        <button
                            className="d-flex justify-content-center justify-items-center p-1 text-white"
                            style={{ backgroundColor: "#77C54E", width: "52px", borderRadius: "6px", height: "26px" }}
                        >
                            New
                        </button>

                        <h4 className="text-start my-4">Why Do People Suffer From Hunger Crisis?</h4>
                        <p className="text-start">
                            Climate change linked with poverty, gender discrimination, conflicts, inequity, weak government and poor health systems all play a
                            role in keeping nutritious food out of reach for millions of people around the world. The most vulnerable group to this crisis are
                            the children.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;
