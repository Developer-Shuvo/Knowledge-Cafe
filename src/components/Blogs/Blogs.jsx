import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"; // Import PropTypes for type checking

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:width-2/3 mx-auto">
      {/* <h2 className="text-4xl ">Blogs : {blogs.length} </h2> */}

      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
