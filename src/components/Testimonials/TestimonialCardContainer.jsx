import TestimonialCard from "./TestimonialCard";
const TestimonialCardContainer = (props) => (
    <div className="cards-container">
        {props.cards.map((card, index) => (
            <TestimonialCard key={index} title={card.title} content={card.content} videoUrl={card.videoUrl} />
        ))}
    </div>
);

export default TestimonialCardContainer;
