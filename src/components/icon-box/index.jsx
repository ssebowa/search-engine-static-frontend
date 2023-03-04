import PropTypes from "prop-types";

const IconBox = ({ data }) => {
    return (
        <div className={data.className}>
            <div className="feature-card bg-light">
                <span className="card-shape card-shape-light"></span>
                <span className="card-shape card-shape-dark"></span>
                <img className="logo" src={process.env.PUBLIC_URL + data.icon} alt=" feature logo" />
                <h2 className="title my-6">
                    {/* <Link to={process.env.PUBLIC_URL + "/service-details/1"}>
                      
                    </Link> */}
                    {data.title}
                </h2>
                <p>{data.excerpt}</p>
            </div>
        </div>
    );
};

IconBox.propTypes = {
    data: PropTypes.object,
};

export default IconBox;
