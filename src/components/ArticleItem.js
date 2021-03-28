import React from 'react';
import {Link} from 'react-router-dom'

import '../styles/ArticleItem.css'

const ArticleItem = ({title, body, id, userId}) => {
  return (
    <li className="article-item">
      <h2 className="article-item_title">{title}</h2>

      <Link to={`article/${id}`} className="article-item_link">  
        <i className="fas fa-chevron-right"></i>
        <span>More</span>
      </Link>
     
    </li>
  )
}

export default ArticleItem
