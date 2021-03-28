import React from 'react'

import '../styles/Article.css';

const Article = ({title, body, id, userId}) => {
  return (
    <div className="article">
      <h1 className="article_title">{title}</h1>
      <p className="article_content">{body}</p>
      <p className="article_author">Author: user{userId}</p>
    </div>
  )
}

export default Article
