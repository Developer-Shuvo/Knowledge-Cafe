import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
          blog={blog}>

          </Blog>
      ))}
    </div>
  );
};

export default Blogs;
