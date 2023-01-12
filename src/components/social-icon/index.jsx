import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const SocialIcon = ({ path, icon, classOption }) => {
    return (
        <a
            className={`${classOption}`}
            href={process.env.PUBLIC_URL + path}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

SocialIcon.propTypes = {
    path: PropTypes.string,
    icon: PropTypes.string,
    classOption: PropTypes.string,
};
SocialIcon.defaultProps = {
    classOption: "footer-social-link",
};

export default SocialIcon;
