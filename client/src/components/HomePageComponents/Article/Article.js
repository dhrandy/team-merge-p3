import React, {Component} from 'react';
import './article.css'

export default class Article extends Component {
  render() {
    return (
        <article>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 left-article">
                <div className="left-article-text animated">
                  <h3>Reminders</h3>
                  <p>The prescription planner app allows you to add medication reminders to your calendar.</p>
                  <ul>
                    <li>Never forget to take your meds</li>
                    <li>See meds on your calendar</li>
                    <li>Views your meds on multiple devices</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 middle-article">
                <div className="middle-article-text">
                  <h3>Food Restrictions</h3>
                  <p>Always know your food restrictions with the prescription planner app.</p>
                  <ul>
                    <li>Food restrictions are very important</li>
                    <li>What should you not take your meds with?</li>
                    <li>Easy to view layout</li>
                  </ul>
                </div>
                </div>
              <div className="col-md-4 right-article">
                <div className="right-article-text">
                  <h3>App Features</h3>
                  <ul>
                    <li>Add medication</li>
                    <li>View meal</li>
                    <li>View side effects</li>
                    <li>View Dosage</li>
                    <li>View meds schedules in your calendar</li>
                  </ul>
                </div>
                </div>
            </div>
          </div>
        </article>
    );
  }
}
