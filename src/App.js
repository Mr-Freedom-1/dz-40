import React, { useState } from "react";
import Article from "./components/Article";
import ArticleAuthor from "./components/ArticleAuthor";

function App () {

  const euArticle = {
      description: 'Article description:',
      preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
      content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
  }

  const uaArticle = {
    description: 'Опис статті:',
    preview: 'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
    content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
  };

  const ua = {
    title: "НОВИНИ NVIDIA",
    sub_title: "Прискорений штучний інтелект NVIDIA в Azure",
    read: "Прочитано",
    close: "Закрити",
    unread: "Не прочитано",
  };

  const en = {
    title: "NVIDIA news",
    sub_title: "NVIDIA Accelerated AI on Azure",
    read: "Mark as read",
    close: "Close",
    unread: "Mark as unread",
  };

  const [language, setLanguage] = useState("en");
  const [isShow, setIsShow]  = useState(false);
  const [isRead, setIsRead] = useState(false);

  const toggleArticle = () => {
    setIsShow(!isShow);
  }

  const markAsRead = () => {
    if (!isRead && !isShow) {
      setIsRead(true);
    }
  };
    
  const markAsUnread = () => {
    setIsRead(false);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="wrapper">
      <h1 className="title">{language === "en" ? en.title : ua.title}</h1>
      <div className="article">
        <Article show={isShow} text={language === "en" ? euArticle : uaArticle} isRead={isRead}>
          <div className="article__title">
            <h2>{language === "en" ? en.sub_title : ua.sub_title}</h2>
          </div>
        </Article>
        <div className="article__actions">
          <button onClick={markAsRead} className="article__btn">{language === "en" ? en.read : ua.read}</button>
          <button onClick={toggleArticle} className="article__btn">{isShow ? language === "en" ? en.close : ua.close : language === "en" ? "Read" : "Читати"}</button>        
          <button onClick={markAsUnread} className="article__btn">{language === "en" ? en.unread : ua.unread}</button>
        </div>
      </div>
      <div className="lang">
        <button onClick={() => handleLanguageChange("ua")} className="lang-btn">UA</button>
        <button onClick={() => handleLanguageChange("en")} className="lang-btn">EN</button>
      </div>
    </div>
);
}

export default App;