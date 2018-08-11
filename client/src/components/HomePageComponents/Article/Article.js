import React, {Component} from 'react';
import './article.css'

export default class Article extends Component {
  render() {
    return (
        <article>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 left-article">
                <div className="left-article-text">
                  <h3>Reminders</h3>
                  <p>The prescription planner app allows you to add medication reminders to your calendar.</p>
                </div>
              </div>
              <div className="col-md-4 middle-article">
                <div className="middle-article-text">
                  <h3>Food Restrictions</h3>
                  <p>Always know your food restrictions with the prescription planner app.</p>
                </div>
                </div>
              <div className="col-md-4 right-article">
                <div className="right-article-text">
                  <h3></h3>
                  <p></p>
                </div>
                </div>
            </div>
          </div>
        </article>
    );
  }
}
