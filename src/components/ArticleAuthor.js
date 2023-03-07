import React from "react";

function ArticleAuthor(props) {
  const { lang } = props;

  const uaTranslation = {
    author: 'Автор: Майк',
    published: 'Опубліковано: 06.12.2022',
    theme: 'Тема: відео карти'
  };

  const enTranslation = {
    author: 'Author: Mike',
    published: 'Published: 06.12.2022',
    theme: 'Theme: Video cards'
  };

  const translation = lang === 'ua' ? uaTranslation : enTranslation;

  return (
      <div className="article__author">
        <p className="article__author--name">{translation.author}</p>
        <p className="article__author--date">{translation.published}</p>
        <p className="article__author--theme">{translation.theme}</p>
      </div>
  );
}

export default ArticleAuthor;

