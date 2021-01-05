import React from "react";
import BlogData from "./BlogData";
import { Container } from "react-bootstrap";
import Card from "./Card";
function Blog() {
  console.log(BlogData);
  return (
    <div className="blog">
      <h2 className="header2 dark">We're different</h2>

      <div className="flex_container">
        {BlogData.map((data, index) => {
          return <Card key={index} details={data} />;
        })}
      </div>
    </div>
  );
}

export default Blog;
