import React from 'react';
import axios from 'axios';
import NewsCard from "../NewsCard/NewsCard"

export default class NewsContainer extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/everything?sources=medical-news-today&heart&apiKey=e025795e658e491b843e854c595effd9')
            .then(res => {
                const articles = res.data.articles;
                console.log(articles)
                this.setState({articles});
            })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.articles.map((article, index) => 
                    <div key={index}>
                        <NewsCard 
                            img={article.urlToImage}
                            title={article.title}
                            author={article.author}
                            article={article.description}
                            link={article.url}
                        />
                    </div>
                )}
            </React.Fragment>
        );
    }
}