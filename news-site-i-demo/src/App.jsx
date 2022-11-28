import { useState } from 'react'
//import './App.css'
//components
import AppNav from './components/AppNav'
import Article from './components/Article'
import ArticleTeaser from './components/ArticleTeaser'
//data: created_at , title , url , author , points , objectID
import newsData from './data/news.json'

function App() {
  const [allArticles, setAllArticles] = useState(newsData.map((article, index) => {
    return {
        id: index+1,
        title: article.title,
        created_date: article.created_at,
        url: article.url, 
        author: article.author, 
        object_id: article.objectID
      }
    }))

  return (
    <div className="App">
      <AppNav />
      {allArticles.map((article => {
        return <ArticleTeaser key={article.id} article={article} />
      }))}
      
    </div>
  )
}

export default App
