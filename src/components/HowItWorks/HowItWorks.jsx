import "./HowItWorks.css";
import Ornament from "../../assets/images/howWorks/Ornament.png";

const HowItWorks = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="text-center">
                    <h1
                        className=" text-5xl font-semibold"
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "48px",
                            fontWeight: "600",
                            lineHeight: "87px",
                            letterSpacing: "0.4079727232456207px",
                            textAlign: "center",
                        }}
                    >
                        How it <span style={{ color: "#4AB421" }}>Works</span>
                    </h1>
                    <p
                        className=" text-xl font-normal mt-4 mb-16 mb-1  py-4"
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            fontWeight: "400",
                            lineHeight: "27px",
                            letterSpacing: "0em",
                            textAlign: "center",
                        }}
                    >
                        Like any other search engine, Ssebowa gets paid by advertisers for displaying adverts alongside search results. When you click on those
                        adverts, the advertising company pays the search engine for displaying their adverts in the strategic position. The profits obtained
                        from the adverts you view are used in projects of tree planting, feeding hungry children and giving sanitary pads to girls without pads.
                        But even when you don’t click on ads and just do your searches, you still add value to the search engine because you make it attractive
                        to advertisers.
                    </p>
                </div>

                <div className="lg:flex lg:justify-around d-flex justify-content-evenly align-items-center WhyChooseUsCards">
                    <div className="flex flex-col text-center flex-sm-column HowItWorkbox">
                        <img className="bg-blue ml-6 w-60 h-36 rectangleimages" src={Ornament} alt="" />
                        <h2 className=" text-2xl font-semibold mt-3" style={{ color: "#4AB421" }}>
                            Protect Our Envoirnment
                        </h2>
                        <p className=" text-1xl font-medium mt-3 px-3 " style={{ color: "#808080" }}>
                            Searching on Ssebowa makes it easy for you to plant trees where they are needed most and mitigate the disastrous effects of climate
                            change.
                        </p>
                        {/* <img className="mt-6 rounded-xl w-56 h-56 ml-6" src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" /> */}
                    </div>
                    <div className="flex flex-col justify-center justify-items-center text-center HowItWorkbox">
                        <img className="bg-blue ml-6 w-60 h-36" src={Ornament} alt="" />
                        <h2 className=" text-2xl font-semibold mt-3" style={{ color: "#4AB421" }}>
                            Fight Global Hunger
                        </h2>
                        <p className=" text-1xl font-medium mt-3 px-3" style={{ color: "#808080" }}>
                            You can feed a hungry child from wherever you are because when you search, many children get to taste a nutritious meal and live a
                            malnutrition-free life.
                        </p>
                        {/* <img className="mt-6 rounded-xl w-56 h-56 ml-6" src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" /> */}
                    </div>
                    <div className="flex flex-col justify-center justify-items-center text-center HowItWorkbox">
                        <img className="bg-blue ml-6 w-60 h-36" src={Ornament} alt="" />
                        <h2 className=" text-2xl font-semibold mt-3" style={{ color: "#4AB421" }}>
                            Empower A Girl Child
                        </h2>
                        <p className=" text-1xl font-medium mt-3 px-3" style={{ color: "#808080" }}>
                            Searching on Ssebowa empowers a girl child by keeping her in school through the provision of sanitary pads. Girls feel safe during
                            their menstruation periods because your searches give them confidence.
                        </p>
                        {/* <img className="mt-6 rounded-xl w-56 h-56 ml-6" src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" /> */}
                    </div>
                </div>
                {/* 
            <div className='lg:flex lg:justify-around mt-6'>
                <img className='ml-4' src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                <img src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                <img src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
                <img src="https://i.ibb.co/0jDJKb4/image-2304.png" alt="" />
            </div> */}
            </div>
        </div>
    );
};

export default HowItWorks;
