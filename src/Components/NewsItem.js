import React, { Component } from 'react'
import './NewsItem.css'
export class NewsItem extends Component {

  render() {
    let { title, description, image, compurl, author, date } = this.props
    return (
   
        <div className="card-container" >
          <img src={image} className="card-image" alt="..." />
          <div className="">
            <h5 className="">{title}</h5>
            <p className="">{description}</p>
            <p className=""><small className="">By {author ? author : "uknown"} On {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={compurl} target="_blank" className="">Read Complete News</a>
          </div>
        </div>
      
    )
  }
}

export default NewsItem
