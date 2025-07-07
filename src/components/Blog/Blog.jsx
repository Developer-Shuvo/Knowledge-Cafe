import { FaBookmark } from "react-icons/fa";
import "./Blog.css";
import PropTypes from "prop-types"; //

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-16">
      <img
        className="cover-image "
        src={cover}
        alt={`Cover image for ${title}`}
      />
      {/* // Author and reading time */}
      <div className="flex justify-between items-center mt-6 ">
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-full mr-2"
            src={author_img}
            alt={`Image of ${author}`}
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold">{author}</h2>
            <p className="text-sm text-gray-600">{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-3 items-center text-lg text-gray-600">
          <h3>{reading_time} min read</h3>
          <button onClick={() => handleAddToBookmark(blog)}>
            <FaBookmark className="text-gray-400 hover:text-orange-400 text-3xl"></FaBookmark>
          </button>
        </div>
      </div>
      <h3 className="text-3xl font-bold mt-3 mb-2">{title}</h3>
      <p>
        {hashtags.map((tag, index) => (
          <span key={index} className="text-sm text-blue-600 hover:underline ">
            {tag}
            {index < hashtags.length - 1 && "  "}
          </span>
        ))}
      </p>

      <button
        className="text-blue-600 text-sm"
        onClick={() => handleMarkAsRead(blog)}
      >
        Mark as Read
      </button>
    </div>
  );
};

export default Blog;
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
