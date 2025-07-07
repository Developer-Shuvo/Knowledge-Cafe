import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 mx-auto">
            <h2>Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => (
                    <div key={index}>
                        <h3>{bookmark.title}</h3>
                        <p>{bookmark.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

Bookmarks.propTypes={
bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;