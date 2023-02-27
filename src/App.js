import React from 'react';
import './App.css';
import ArticleFilteringList from './components/articleFilteringList';
import { Routes, Route } from 'react-router-dom';
import ArticlePage from './components/articlePage';

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route
          exact="true"
          path="/"
          element={<ArticleFilteringList></ArticleFilteringList>}
        />
      </Routes>

      <Routes>
        <Route
          exact="true"
          path="/:section/:id"
          element={<ArticlePage></ArticlePage>}
        />
      </Routes>
    </React.Fragment>
  );
}
