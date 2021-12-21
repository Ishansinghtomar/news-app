import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, image, compurl, author, date } = this.props
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "uknown"} On {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={compurl} target="_blank" className="btn btn-sm btn-primary">Read Complete News</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
