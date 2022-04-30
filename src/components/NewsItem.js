import React from "react";

const NewsItem = (props) => {
  let { description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger"> {source} </span>
        </div>

        <img
          src={
            !imageUrl
              ? "https://images.hindustantimes.com/img/2022/03/22/1600x900/radhe-shyam_1646819722077_1647937972169.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          {/* <h5 className="card-title"></h5> */}
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
