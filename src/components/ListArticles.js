import React from 'react'
import ArticleItem from './ArticleItem';

import '../styles/ListArticles.css';

const ListArticles = ({articles}) => {
  return (
    <ul className="list-articles">
      {articles.map((article, index) => {
        return (
         <ArticleItem 
          key={index} {...article} 
        />
        )
      })}
    </ul>
  )
}

export default ListArticles
