import React, {Component} from 'react';
import './article.css'

export default class Article extends Component {
  render() {
    return (
        <article>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 left-article">1</div>
              <div className="col-md-4 middle-article">2</div>
              <div className="col-md-4 right-article">3</div>
            </div>
          </div>
        </article>
    );
  }
}
