const TestimonialCard = (props) => (
    <div className="TestimonialCard">
        <img src={props.imgUrl} alt={props.alt || "Image"} />
        <div className="card-content">
            <span>{props.title}</span>
            <p>{props.content}</p>
        </div>
    </div>
);
export default TestimonialCard;
