import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // Use props in newsitem...
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
              rel="noopener noreferrer" // warning here so solve by this with the help of google
            >
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
