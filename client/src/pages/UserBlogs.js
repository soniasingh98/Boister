import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./../components/BlogCard";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  //get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);

  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={new Date(blog?.createdAt).toLocaleDateString("en-GB")}
          />
        ))
      ) : (
        <h1
          style={{
            color: "white",
            marginTop: "250px",
            textAlign: "center",
            fontSize: "36px",
          }}
        >
          Your Crafts will Appear Here...
        </h1>
      )}
    </div>
  );
};

export default UserBlogs;
