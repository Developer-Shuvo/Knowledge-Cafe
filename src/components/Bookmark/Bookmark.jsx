import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;