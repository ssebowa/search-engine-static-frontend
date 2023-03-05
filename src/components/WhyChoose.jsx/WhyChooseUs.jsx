import "./WhyChooseUs.css";
import happiness1 from "../../assets/choose/choose4.jpeg";
import happiness2 from "../../assets/choose/choose2.jpeg";
import happiness3 from "../../assets/choose/choose3.jpeg";
import happiness4 from "../../assets/choose/choosee4.jpeg";
import cupshape from "../../assets/images/howWorks/cupshape.jpeg";
import bagshape from "../../assets/images/howWorks/bagshape.jpeg";
import purseshape from "../../assets/images/howWorks/purseshape.jpeg";
import shape2 from "../../assets/images/howWorks/shape2.jpeg";

const WhyChooseUs = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className=" text-5xl mt-5 font-semibold choose-title">
                    Why <span style={{ color: "#4AB421" }}>Choose</span> US?
                </h1>
                <p
                    className=" text-xl font-normal mt-4 mb-16 choose-para"
                    style={{
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontWeight: "400",
                        lineHeight: "27px",
                        letterSpacing: "0em",
                        textAlign: "center",
                    }}
                >
                    We are authentic, down-to-earth, true to ourselves and honest to Ssebowa users. We say what we will accomplish and accomplish what we say.
                    Our team prioritises the earth and its people and that is why we aim at engaging everyone in restoring the environment, eliminating hunger
                    and keeping a girl child in school through Information Technology.
                </p>
            </div>

            <div
                className="lg:flex lg:justify-around d-flex
             justify-content-evenly align-items-center WhyChooseUsCards py-5"
            >
                <div
                    className="flex flex-col text-center 
                flex-sm-column my-5

                "
                >
                    <img className="bg-blue ml-6 w-60 h-36" src={cupshape} alt="" width="90px" height="90px" />

                    <h1 className=" text-3xl font-semibold mt-3">750+</h1>
                    <p className=" text-2xl font-medium mt-3" style={{ color: "#808080" }}>
                        trees planted
                    </p>
                    <img className="mt-6 rounded-xl w-56 h-56 ml-6" src={happiness1} alt="" width="250px" height="250px" />
                </div>
                <div className="flex flex-col justify-center justify-items-center text-center my-5">
                    {/* <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" /> */}
                    <img className="bg-blue ml-6 w-60 h-36" src={purseshape} alt="" width="90px" height="90px" />

                    <h1 className=" text-3xl font-semibold mt-3">1000+</h1>
                    <p className=" text-2xl font-medium mt-3" style={{ color: "#808080" }}>
                        Meals Served
                    </p>
                    <img className="mt-6 rounded-xl w-56 h-56 ml-6" src={happiness2} alt="" width="250px" height="250px" />
                </div>
                <div className="flex flex-col justify-center justify-items-center text-center my-5">
                    {/* <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" /> */}
                    <img className="bg-blue ml-6 w-60 h-36" src={shape2} alt="" width="90px" height="90px" />

                    <h1 className=" text-3xl font-semibold mt-3">670+</h1>
                    <p className=" text-2xl font-medium mt-3" style={{ color: "#808080" }}>
                        pads provided
                    </p>
                    <img className="mt-6 rounded-xl w-56 h-56 ml-6" src={happiness3} alt="" width="250px" height="250px" />
                </div>
                <div className="flex flex-col justify-center justify-items-center text-center my-5">
                    {/* <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" width="250px" height="250px" /> */}
                    <img className="bg-blue ml-6 w-60 h-36" src={bagshape} alt="" width="90px" height="90px" />

                    <h1 className=" text-3xl font-semibold mt-3">458+</h1>
                    <p className=" text-2xl font-medium mt-3" style={{ color: "#808080" }}>
                        Projects
                    </p>
                    <img className="mt-6 rounded-xl w-56 h-56 ml-6" src={happiness4} alt="" width="250px" height="250px" />
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
    );
};

export default WhyChooseUs;
