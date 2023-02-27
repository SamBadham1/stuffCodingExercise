import React, { Component } from 'react';
import ArticleListComponent from './articleList';
import ArticleFilter from './articleFilter';
import { dateConversion } from '../helpers/dateConversion';
class ArticleFilteringList extends Component {
  state = {
    error: null,
    isLoaded: false,
    articles: [],
    filteredArticles: [],
  };

  componentDidMount() {
    // API calls here

    fetch(
      'https://www.stuff.co.nz/static/spade/nCuL9ZmbMXzhGbHTJNJYU6i45y9hj0DJrhPteuU6MGB68zM5goWqk5Q1aNkh.json'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: this.convertdates(result),
            filteredArticles: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  convertdates(data) {
    const foramtedData = data.stories.map((s) => {
      return { ...s, publishedDateAsDate: dateConversion(s.publishedDate) };
    });
    data.stories = foramtedData;
    return data;
  }
  handleFilterChange = (filterValues) => {
    let data = { ...this.state.articles };
    if (filterValues && filterValues.length > 0) {
      data.stories = data.stories.filter(
        (f) => filterValues.indexOf(f.story.section) > -1
      );
      this.setState({ filteredArticles: data });
    } else {
      this.setState({ filteredArticles: data });
    }
  };

  handleSortOrderChange = (sortBy) => {
    let data = { ...this.state.filteredArticles };

    if (sortBy === 'asc') {
      data.stories = data.stories.sort(
        (a, b) => a.publishedDateAsDate - b.publishedDateAsDate
      );
      this.setState({ filteredArticles: data });
    } else {
      data.stories = data.stories.sort(
        (a, b) => b.publishedDateAsDate - a.publishedDateAsDate
      );
      this.setState({ filteredArticles: data });
    }

    console.log(data);
  };

  render() {
    const { error, isLoaded, articles, filteredArticles } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div className="container">
            <ArticleFilter
              articles={articles.stories}
              onFilterChange={this.handleFilterChange}
              onSortOrderChange={this.handleSortOrderChange}
            />
            <ArticleListComponent
              articles={filteredArticles.stories}
            ></ArticleListComponent>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default ArticleFilteringList;
