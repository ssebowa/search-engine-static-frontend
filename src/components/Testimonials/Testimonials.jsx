import TestimonialCardContainer from "./TestimonialCardContainer";
import "./Testimonials.css";

const Testimonials = () => {
  const cardsData = [
    {
      id: 1,
      title:
        "In the artists own experience, of course, art is fundamentally indefinable, unsayable",
      content: "Clark Kent",
      imgUrl: "https://unsplash.it/200/200",
    },
    {
      id: 2,
      title:
        "In the artists own experience, of course, art is fundamentally indefinable, unsayable",
      content: "Bruce Wayne",
      imgUrl: "https://unsplash.it/201/200",
    },
    {
      id: 3,
      title:
        "In the artists own experience, of course, art is fundamentally indefinable, unsayable",
      content: "Peter Parker",
      imgUrl: "https://unsplash.it/200/201",
    },
    {
      id: 4,
      title:
        "In the artists own experience, of course, art is fundamentally indefinable, unsayable",
      content: "Tony Stark",
      imgUrl: "https://unsplash.it/201/201",
    },
    {
      id: 5,
      title:
        "In the artists own experience, of course, art is fundamentally indefinable, unsayable",
      content: "Reed Richards",
      imgUrl: "https://unsplash.it/202/200",
    },
    {
      id: 6,
      title:
        "In the artists own experience, of course, art is fundamentally indefinable, unsayable",
      content: "Wade Wilson",
      imgUrl: "https://unsplash.it/200/199",
    },
    {
      id: 7,
      title:
        "In the artists own experience, of course, art is fundamentally indefinable, unsayable",
      content: "Peter Quill",
      imgUrl: "https://unsplash.it/199/199",
    }
  ];
  return (
    <>
      <div className="testimonials-main-container">
        <div className="testimonials-data">
          <h1>Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
