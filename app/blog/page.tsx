// import BlogCard from "@/features/blog/components/BlogCard/BlogCard";
// import BlogImage from "@/features/blog/components/BlogImage/BlogImage";
// import BlogList from "@/features/blog/components/BlogList/BlogList";
import * as Blog from "@/features/blog/components/Index";
import React from "react";

const BlogPage = async () => {
  const posts = await fetch("http://localhost:3000/api/v1/blog/getAllBlogs", {
    next: { revalidate: 3000 },
  });
  return (
    <div>
      <Blog.BlogImage />
      <Blog.BlogList />
      <Blog.BlogCard />
    </div>
  );
};

export default BlogPage;
