import TestimonialCardContainer from "./TestimonialCardContainer";
import "./Testimonials.css";

const Testimonials = () => {
    const cardsData = [
        {
            id: 1,
            title: "YouTube video player",
            content: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            videoUrl: "https://www.youtube.com/embed/5Zyc_fqsLqc?controls=0&amp;start=3",
        },
        {
            id: 2,
            title: "YouTube video player",
            content: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            videoUrl: "https://www.youtube.com/embed/Ag6Cn0lT_ys",
        },
        {
            id: 3,
            title: "YouTube video player",
            content: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            videoUrl: "https://www.youtube.com/embed/5J-wCwuLJuU",
        },
    ];
    return (
        <>
            <div className="testimonials-main-container">
                <div className="testimonials-data">
                    <h1>Testimonials</h1>
                    <p>
                        Feel inspired and get confident to search on the Ssebowa. You could become a testimony to many
                        <br /> people and make them join you to search for a good cause.
                    </p>
                </div>
                {/* <div className="SlideContainer"> */}
                {/* <h1 style={{ "text-align": "center" }}>React Card Slider</h1> */}
                <TestimonialCardContainer cards={cardsData} />
                <div className="testimonials-slider-back-green"></div>
            </div>
        </>
    );
};

export default Testimonials;
