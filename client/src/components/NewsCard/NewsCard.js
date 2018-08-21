import React from 'react';
import './newsCard.css';

const NewsCard = (props) => {
  return(
        <div className="card">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <img className="news-image" src={props.img} alt="news-img"></img>
                    </div>
                    <div className="col-sm-8">
                        <p className="article-title">{props.title}</p>
                        <p><span id="author-bold">Author:</span> {props.author}</p>
                        <p>{props.article}</p>
                        <p><a href={props.link}>Read more..</a></p>
                    </div>
                </div>
            </div>
        </div>
  )

}

export default NewsCard;