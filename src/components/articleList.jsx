import React, { Component } from 'react';
import ArticleCardComponent from './articleCard';
export class ArticleListComponent extends Component {
  render() {
    const { articles } = this.props;

    return (
      <div className="row">
        {articles.map((article) => {
          return (
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="pb-3">
                <ArticleCardComponent
                  key={article.storyId}
                  articleSingle={article}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticleListComponent;
