"use client";
import React, { useEffect, useState } from "react";
import getAllPost from "./getAllPost";
import Link from "next/link";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllPost();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>BlogPage</h1>
      <div className="border border-white p-6">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Link ></Link>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
