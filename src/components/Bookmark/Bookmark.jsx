import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-red-100 p-4 rounded-lg mb-4">
      <h2 className="text-2xl font-semibold bg-red-100">{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
