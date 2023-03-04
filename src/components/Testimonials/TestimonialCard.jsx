const TestimonialCard = (props) => (
    <div className="TestimonialCard">
        <iframe
            width="100%"
            height="100%"
            src={props.videoUrl}
            title={props.title}
            // frameborder="0"
            allow={props.content}
            // allowfullscreen
        ></iframe>
        {/* <img src={props.imgUrl} alt={props.alt || "Image"} />
        <div className="card-content">
            <span>{props.title}</span>
            <p>{props.content}</p>
        </div> */}
    </div>
);
export default TestimonialCard;
