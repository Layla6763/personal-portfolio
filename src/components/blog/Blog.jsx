import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
const Blog = (props) => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Blogs and Projects</h1>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            key={index}
            title={value.title}
            description={value.description}
            index={index}
          />
        );
      })}
    </div>
  );
};

const BlogCard = ({ index, title, image, description }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            {/* <img src={image} className="card-img" alt="..." /> */}
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h2 className="">{title}</h2>
              <p className="lead">{description}</p>
              {index === 0 &&
              <div>
                <a href={require('../../editable-stuff/blog1.pdf')}>
                  Read more...
                </a> 
              </div>
              }
              {index === 1 &&
              <div>
                <a href="https://github.com/Layla6763/game-list">
                  Read more...
                </a> 
              </div>
              }
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Blog, BlogBuilder };
