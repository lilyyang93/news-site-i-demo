import { useState } from "react"
import Article from "./Article"

export default function ArticleTeaser({article}) {

    const [showArticle, setShowArticle] = useState(false)

    const updateShowArticle = () => {
        setShowArticle(!showArticle)
    }

    return (
        <div className="Article-Teaser">
            <h2 onClick={updateShowArticle}>{article.id}. {article.title}</h2>
            {showArticle ? <Article {...article}/> : ''}
        </div>
    )  
}
